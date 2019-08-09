import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
        }),
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        }),
      ),
      transition('initial=>final', animate('.5s ease-out')),
      transition('final=>initial', animate('.5s ease-out')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  isCollapsed = true;

  isLoggedIn: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService
      .logout()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.authService.isLoggedIn = false;
          this.router.navigate(['/login']);
          this.toastr.success('', 'Logout Success', {
            positionClass: 'toast-top-center',
            closeButton: true,
            timeOut: 3000,
          });
        },
        error => {
          console.log(error);
        },
      );
  }
}
