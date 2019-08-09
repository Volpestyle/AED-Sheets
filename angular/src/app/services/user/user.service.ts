import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { forkJoin, Observable, ReplaySubject } from 'rxjs'; // RxJS 6 syntax
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private dataService: DataService) {}

  // Get user/token payload
  getUser() {
    return this.http.get<any>(`api/user`).pipe(
      map(user => {
        return user;
      }),
    );
  }
}
