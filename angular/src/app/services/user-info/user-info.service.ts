import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  getUserInfo(id: string) {
    return this.http.get(`api/users/info/${id}`).pipe(
      map(response => {
        return response;
      }),
    );
  }

  getUsers(top: number) {
    return this.http.get<any>(`api/users/all/${top}`).pipe(
      map(response => {
        return response;
      }),
    );
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.getUsers(1).subscribe(
        data => {
          this.getUsers(data['resultsPossible']).subscribe(
            data => {
              resolve(data['items'].filter(u => u.isUser));
            },
            err => {
              reject(err);
            },
          );
        },
        err => {
          reject(err);
        },
      );
    });
  }
}
