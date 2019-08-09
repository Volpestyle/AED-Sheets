import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { DataService } from 'src/app/services/data/data.service';
import { RawQuery } from 'src/app/models/rawQuery';
import { ToastrService } from 'ngx-toastr';
import { SearchSub } from 'src/app/models/searchSub';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscribeModalComponent } from '../subscribe-modal/subscribe-modal.component';
import { SearchService } from 'src/app/services/search/search.service';
import { AsYouType } from 'libphonenumber-js';
import { User } from 'src/app/models/user';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UtilService } from 'src/app/services/util/util.service';
import { SharedSubModalComponent } from '../shared-sub-modal/shared-sub-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;

  // Save search
  subName: string;
  nFreq: string;

  phoneInput: string;
  enterPhone: boolean = false;

  sharedSubs: SearchSub[] = [];

  isDeletingSharedSub: boolean;

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private searchService: SearchService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private rolesService: RolesService,
    private utilService: UtilService,
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.dataService.getUser(user.personId).subscribe(async dbUser => {
        this.user = dbUser;
        await this.rolesService.getAuthorizations();
        if (this.rolesService.auths.get('canCreateSharedSub')) {
          this.dataService.getSharedSubs().subscribe(subs => {
            this.sharedSubs = subs;
          });
        }
      });
    });
  }

  // This was used when adding a default personal subscription
  /*
  openSubscribeModal() {
    let rq = RawQuery.getDefaults();
    let q = this.searchService.buildQuery(rq);
    let options = {
      canCreateShared: false,
      canAddToOtherUser: false,
      canEnterName: false,
    };
    const modalRef = this.modalService.open(SubscribeModalComponent);
    modalRef.componentInstance.heading =
      'Subscribe to all D-Sheet Notifications';
    modalRef.componentInstance.defaultName = true;
    modalRef.componentInstance.subName = 'All';
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.query = q;
    modalRef.componentInstance.rawQuery = rq;
    modalRef.componentInstance.options = options;
    modalRef.componentInstance.refresh.subscribe(v => {
      this.ngOnInit();
    });
  }
*/

  openSharedSubModal() {
    const modalRef = this.modalService.open(SharedSubModalComponent);
    modalRef.componentInstance.heading = 'Add shared subscriptions';
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.addSub.subscribe(sub => {
      this.addSharedSubToUser(sub);
    });
  }

  removeSubFromUser(subToRemove: SearchSub) {
    this.dataService
      .removeSubFromUser(this.user.personId, subToRemove._id)
      .subscribe(subs => {
        this.user.subs = subs;
        this.toastr.success(
          '',
          `
        "${subToRemove.name}" has been removed from your subscriptions.`,
          this.utilService.msgOptions,
        );
      });
  }

  addSharedSubToUser(subToAdd: SearchSub) {
    this.dataService
      .addSharedSubToUser(this.user.personId, subToAdd._id)
      .subscribe(subs => {
        console.log(subs);
        this.user.sharedSubs = subs;
        this.toastr.success(
          '',
          `
        "${subToAdd.name}" has been added to your subscriptions.`,
          this.utilService.msgOptions,
        );
      });
  }

  removeSharedSubFromUser(subToRemove: SearchSub) {
    this.dataService
      .removeSharedSubFromUser(this.user.personId, subToRemove._id)
      .subscribe(subs => {
        this.user.sharedSubs = subs;
        this.toastr.success(
          '',
          `
        "${subToRemove.name}" has been removed from your subscriptions.`,
          this.utilService.msgOptions,
        );
      });
  }

  deleteSharedSub(subToRemove: SearchSub) {
    this.dataService.deleteSharedSub(subToRemove._id).subscribe(sub => {
      this.sharedSubs = this.sharedSubs.filter(({ _id }) => _id !== sub._id);
      this.toastr.success(
        '',
        `
        Shared sub "${sub.name}" has been deleted.`,
        this.utilService.msgOptions,
      );
    });
  }

  savePhone() {
    let asYouType = new AsYouType('US');
    asYouType.input(this.phoneInput);
    this.user.phoneNumber = asYouType.getNumber().number.toString();
    this.dataService
      .updateUser(this.user)
      .pipe(first())
      .subscribe(user => {
        this.user = user;
        this.enterPhone = false;
      });
  }

  deletePhone() {
    let canDelete = true;
    this.user.subs.forEach(search => {
      if (search.type === 'text') {
        canDelete = false;
      }
    });
    if (canDelete) {
      this.user.phoneNumber = '';
      this.dataService
        .updateUser(this.user)
        .pipe(first())
        .subscribe(user => {
          this.user = user;
        });
    } else {
      this.toastr.warning(
        '',
        `
        Please remove all 'text' subscriptions before removing your phone number.`,
        this.utilService.msgOptions,
      );
    }
  }

  onPhoneChange(e) {
    this.phoneInput = new AsYouType('US').input(e);
  }
}
