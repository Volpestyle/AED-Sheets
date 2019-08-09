import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data/data.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RolesService } from 'src/app/services/roles/roles.service';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from 'src/app/services/util/util.service';
import { RawQuery } from 'src/app/models/rawQuery';
import { SearchService } from 'src/app/services/search/search.service';
import { SubscribeModalComponent } from '../../subscribe-modal/subscribe-modal.component';
import { SharedSubModalComponent } from '../../shared-sub-modal/shared-sub-modal.component';
import { SearchSub } from 'src/app/models/searchSub';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  @Input() user: any;
  dbUser: User;
  userRoles: Set<string>;
  private readonly PERMISSIONS = environment['permissions'];
  rolesForm: FormGroup;
  auths: Map<String, Boolean>;
  saving: boolean = false;

  loadedUser: boolean = false;
  willDelete: boolean = false;
  willCreate: boolean = false;

  admin = false;
  constructor(
    public activeModal: NgbActiveModal,
    private dataService: DataService,
    private fb: FormBuilder,
    private rolesService: RolesService,
    private toastr: ToastrService,
    private utilService: UtilService,
    private searchService: SearchService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  openSharedSubModal() {
    const modalRef = this.modalService.open(SharedSubModalComponent);
    modalRef.componentInstance.heading = 'Add shared subscriptions';
    modalRef.componentInstance.user = this.dbUser;
    modalRef.componentInstance.addSub.subscribe(sub => {
      this.dbUser.sharedSubs.push(sub);
    });
  }

  onAdminChange() {
    if (this.admin) {
      Object.keys(this.rolesForm.controls).forEach(key => {
        this.rolesForm.controls[key].setValue(true);
        this.rolesForm.controls[key].disable();
      });
    } else {
      Object.keys(this.rolesForm.controls).forEach(key => {
        this.rolesForm.controls[key].setValue(false);
        this.rolesForm.controls[key].enable();
      });
    }
  }

  async onSave() {
    this.saving = true;
    let promise = new Promise(async (resolve, reject) => {
      if (this.loadedUser) {
        if (this.willDelete) {
          await this.deleteUser();
          resolve();
        } else {
          this.applyRoles();
          await this.updateUser();
          resolve();
        }
      } else {
        if (this.willCreate) {
          this.applyRoles();
          this.dataService
            .createUser(this.dbUser)
            .then(user => {
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        }
        resolve();
      }
    });
    promise
      .then(() => {
        this.saving = false;
        this.activeModal.dismiss();
        this.toastr.success(
          '',
          'User changes saved',
          this.utilService.msgOptions,
        );
      })
      .catch(err => {
        this.saving = false;
        this.toastr.error(
          `${err.msg}`,
          'Changes to user could not be saved.',
          this.utilService.msgOptions,
        );
      });
  }

  applyRoles() {
    this.dbUser.roles = [];
    if (this.admin) {
      this.dbUser.roles.push('ADMIN');
    } else {
      Object.keys(this.rolesForm.controls).forEach(key => {
        if (this.rolesForm.controls[key].value) {
          this.dbUser.roles.push(key);
        }
      });
    }
  }

  initUser(user) {
    this.dbUser = user;
    this.userRoles = new Set(user.roles);
    this.auths = this.rolesService.makeAuthMap(this.userRoles);

    // Get inital permissions
    let that = this;
    let formControls = Object.keys(this.PERMISSIONS).reduce(function(obj, itm) {
      obj[itm] = [that.auths.get(itm)];
      return obj;
    }, {});
    this.rolesForm = this.fb.group(formControls);

    // If admin, override
    if (this.userRoles.has('ADMIN')) {
      this.admin = true;
      this.onAdminChange();
    } else this.admin = false;

    console.log(this.rolesForm);
  }

  loadUser() {
    return new Promise((resolve, reject) => {
      this.dataService.getUser(this.user.id).subscribe(
        user => {
          if (user) {
            this.initUser(user);
            this.loadedUser = true;
          } else this.loadedUser = false;
          resolve();
        },
        err => {
          reject(err);
        },
      );
    });
  }

  onCreate() {
    this.willDelete = false;
    this.willCreate = true;
    this.dbUser = new User(this.user.id);
    this.initUser(this.dbUser);
  }

  onDelete() {
    this.willDelete = true;
    this.willCreate = false;
    this.dbUser = null;
  }

  deleteUser() {
    return new Promise((resolve, reject) => {
      this.dataService
        .deleteUser(this.user.id)
        .pipe(first())
        .subscribe(
          user => {
            resolve(user);
          },
          err => {
            reject(err);
          },
        );
    });
  }

  updateUser() {
    return new Promise((resolve, reject) => {
      this.dataService
        .updateUser(this.dbUser)
        .pipe(first())
        .subscribe(
          user => {
            resolve(user);
          },
          err => {
            reject(err);
          },
        );
    });
  }

  removeSubFromUser(subToRemove) {
    this.dbUser.subs = this.dbUser.subs.filter(
      sub => subToRemove._id !== sub._id,
    );
  }

  removeSharedSubFromUser(subToRemove: SearchSub) {
    this.dbUser.sharedSubs = this.dbUser.sharedSubs.filter(
      sub => sub._id !== subToRemove._id,
    );
  }
}
