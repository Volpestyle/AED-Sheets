import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { first } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../user/user.service';
import { DataService } from '../data/data.service';
import { RolesService } from '../roles/roles.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private rolesService: RolesService) {}

  helper = new JwtHelperService();
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  set isLoggedIn(val: any) {
    this.loggedIn.next(val);
  }

  getAuth(): any {
    return this.http.get<any>(`api/auth/check`);
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`api/auth/login`, {
        username: username,
        password: password,
      })
      .pipe(
        map(response => {
          return response;
        }),
      );
  }

  logout() {
    this.rolesService.auths.clear();
    this.rolesService.userRoles.clear();
    return this.http.get<any>(`api/auth/logout`).pipe(
      map(response => {
        return response;
      }),
    );
  }
}
