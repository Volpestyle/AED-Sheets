import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';
import { RolesService } from './roles.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService {
  constructor(
    private userService: UserService,
    private rolesService: RolesService,
    public router: Router,
    private toastr: ToastrService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.rolesService
      .checkAuthorization(next.data.permissions)
      .then(authorized => {
        if (authorized) {
          return true;
        } else {
          this.toastr.warning(
            '',
            'You do not have permissions to view this resource',
            {
              positionClass: 'toast-top-center',
              closeButton: true,
              timeOut: 3000,
            },
          );
          this.router.navigate(['/home']);
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        this.toastr.error('Please try again later', 'An error has occured', {
          positionClass: 'toast-top-center',
          closeButton: true,
          timeOut: 3000,
        });
        this.router.navigate(['/home']);
        return false;
      });
  }
}
