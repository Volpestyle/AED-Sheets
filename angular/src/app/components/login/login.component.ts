import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data/data.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private rolesService: RolesService,
    private utilService: UtilService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.status == 'VALID') {
      this.isLoading = true;
      let encodedPassword = btoa(this.form.password.value);
      this.authService
        .login(this.form.username.value, encodedPassword)
        .pipe(first())
        .subscribe(
          user => {
            console.log(user);
            this.rolesService.getAuthorizations();
            this.authService.isLoggedIn = true;
            this.isLoading = false;
            this.router.navigate(['/']);
            this.toastr.success(
              '',
              'Login Success',
              this.utilService.msgOptions,
            );
          },
          err => {
            console.log(err);
            this.isLoading = false;
            this.toastr.error(
              `${err.error.msg}`,
              'Login Error',
              this.utilService.msgOptions,
            );
          },
        );
    } else {
      this.toastr.warning(
        '',
        'Please fill out all fields',
        this.utilService.msgOptions,
      );
    }
  }
}
