import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    private toastr: ToastrService,
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.auth.getAuth().pipe(
      map(data => {
        let authStatus = data['authStatus'];
        console.log(authStatus);
        if (authStatus !== 'valid') {
          this.router.navigate(['/login']);
          if (authStatus === 'expired') {
            this.toastr.warning(
              'Please Log-in',
              "You're previous session has expired.",
              {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 3000,
              },
            );
          } else {
            this.toastr.info('', 'Please Log-in', {
              positionClass: 'toast-top-center',
              closeButton: true,
              timeOut: 3000,
            });
          }
          this.auth.isLoggedIn = false;
          return false;
        }
        this.auth.isLoggedIn = true;
        return true;
      }),
    );
  }
}
