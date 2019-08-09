import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { DataService } from 'src/app/services/data/data.service';
import { SearchSub } from 'src/app/models/searchSub';
import { first } from 'rxjs/operators';
import { RawQuery } from 'src/app/models/rawQuery';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { RolesService } from 'src/app/services/roles/roles.service';
import { User } from 'src/app/models/user';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss'],
})
export class SubscribeModalComponent implements OnInit {
  @Input() heading: string;
  @Input() query: any;
  @Input() rawQuery: RawQuery;
  @Input() user: User;
  @Input() options: any;

  isSaving: boolean;

  @Input() subName: string;
  nFreq: string = 'Immediate';
  nType: string = 'email';
  isShared: boolean;

  activeUsers: User[];
  appliedUser: User;

  refresh: Subject<boolean> = new Subject();

  constructor(
    private dataService: DataService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private rolesService: RolesService,
    private utilService: UtilService,
  ) {}

  ngOnInit() {
    if (this.rolesService.auths.get('addSubToOtherUser')) {
      this.dataService.getAllUsers().subscribe(users => {
        this.activeUsers = users;
      });
      this.appliedUser = this.user;
    }
  }

  compareFn(u1: User, u2: User): boolean {
    return u1 && u2 ? u1.personId === u2.personId : u1 === u2;
  }

  onTypeChange() {
    if (this.isShared) {
      return;
    }
    if (this.nType === 'text') {
      if (!this.user.phoneNumber) {
        this.toastr.warning(
          'Please add one via your profile page.',
          `You must have a phone number associated with your profile to select text notifications.`,
          {
            positionClass: 'toast-top-center',
            closeButton: true,
            timeOut: 7000,
          },
        );
        this.nType = 'email';
      } else {
        this.nFreq = 'Immediate';
      }
    }
  }

  onSave() {
    if (!this.subName) {
      this.toastr.warning('Name cannot be empty', '', {
        positionClass: 'toast-top-center',
        closeButton: true,
        timeOut: 3000,
      });
      return;
    }
    const newSub = new SearchSub(
      this.subName,
      this.nType,
      this.nFreq,
      this.rawQuery,
      this.query,
    );
    if (this.isShared) {
      this.isSaving = true;
      newSub.author = this.user.name;
      this.dataService.createSharedSub(newSub).subscribe(() => {
        this.isSaving = false;
        this.modalService.dismissAll();
        this.toastr.success(
          '',
          'Created new shared subscription',
          this.utilService.msgOptions,
        );
      });
    } else {
      let user = this.appliedUser ? this.appliedUser : this.user;
      if (!user.email) {
        this.toastr.error(
          `There is no email associated with the account you are trying to add a subscription to`,
          'Cannot add subscription',
          this.utilService.msgOptions,
        );
        return;
      }
      for (let sub of this.user.subs) {
        if (sub.name === newSub.name) {
          this.toastr.warning(
            ``,
            'You already have a subscription with this name!',
            this.utilService.msgOptions,
          );
          return;
        }
      }
      this.isSaving = true;
      this.dataService.addSubToUser(user.personId, newSub).subscribe(() => {
        this.refresh.next(true);
        this.isSaving = false;
        this.modalService.dismissAll();
        this.toastr.success(
          '',
          'Subscribed to search',
          this.utilService.msgOptions,
        );
      });
    }
  }
}
