import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from 'src/app/services/util/util.service';
import { DataService } from 'src/app/services/data/data.service';
import { SearchSub } from 'src/app/models/searchSub';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-assign-shared-subscription',
  templateUrl: './assign-shared-subscription.component.html',
  styleUrls: ['./assign-shared-subscription.component.scss'],
})
export class AssignSharedSubscriptionComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private utilService: UtilService,
    private dataService: DataService,
    private modalService: NgbModal,
    private userInfoService: UserInfoService,
  ) {}

  file: File;
  users;
  sharedSubs: SearchSub[];
  chosenSub: SearchSub;
  names: string[] = [];
  isAssigning: boolean = false;

  summaryInfo: any = {};

  effectedUsers: number;

  ngOnInit() {
    this.dataService.getSharedSubs().subscribe(subs => {
      this.sharedSubs = subs;
    });
  }

  @ViewChild('labelImport', { static: false }) labelImport!: ElementRef;
  @ViewChild('summary', { static: false }) summary!: ElementRef;

  onFileChange(files: FileList) {
    if (!(files.item(0).type === 'text/csv')) {
      this.toastr.error(
        'File must be .csv',
        'Wrong file type',
        this.utilService.msgOptions,
      );
      return;
    }
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.file = files.item(0);

    this.names = [];
    let reader = new FileReader();
    reader.readAsText(this.file, 'UTF-8');
    reader.onload = async e => {
      let lines: string[][] = this.utilService.csvToArray(reader.result);
      lines.forEach(line => {
        line.forEach(name => {
          this.names.push(this.utilService.titleCase(name));
        });
      });
    };
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result;
  }

  onChoose(sub) {
    this.modalService.dismissAll();
    this.chosenSub = sub;
  }

  onRemove() {
    this.chosenSub = null;
  }

  async onAssign() {
    this.effectedUsers = 0;
    this.summaryInfo.invalid = [];
    this.summaryInfo.alreadyHadSub = [];
    this.summaryInfo.noEmail = [];
    this.isAssigning = true;
    this.users = await this.userInfoService.getAllUsers();
    let iterateNames = this.names.map(name => {
      return new Promise((resolve, reject) => {
        let user = this.users.filter(user => user.displayName === name);
        console.log(user);
        if (!user.length) {
          this.summaryInfo.invalid.push(name);
          resolve();
        } else {
          this.dataService
            .getUserNoPopulate(user[0].id)
            .subscribe(async dbUser => {
              if (dbUser) {
                if (dbUser.sharedSubs.includes(this.chosenSub._id)) {
                  this.summaryInfo.alreadyHadSub.push(name);
                  resolve();
                } else {
                  dbUser.sharedSubs.push(this.chosenSub._id);
                  await this.updateUser(dbUser);
                  this.effectedUsers++;
                  resolve();
                }
                if (!dbUser.email) {
                  this.summaryInfo.noEmail.push(name);
                }
              } else {
                let newUser = new User(user[0].id);
                newUser.sharedSubs.push(this.chosenSub);
                let dbUser = await this.dataService.createUser(newUser);
                this.effectedUsers++;
                if (!dbUser.email) {
                  this.summaryInfo.noEmail.push(name);
                }
                resolve();
              }
            });
        }
      });
    });
    Promise.all(iterateNames).then(() => {
      this.isAssigning = false;
      this.toastr.success(
        '',
        'Assigning Complete',
        this.utilService.msgOptions,
      );
      this.open(this.summary);
    });
  }

  updateUser(user) {
    return new Promise((resolve, reject) => {
      this.dataService.updateUser(user).subscribe(
        user => {
          resolve(user);
        },
        err => {
          reject(err);
        },
      );
    });
  }
}
