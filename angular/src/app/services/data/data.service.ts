import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Entry, Note } from 'src/app/models/entry';
import { User } from 'src/app/models/user';
import { Lookup, LookupValue } from 'src/app/models/lookup';
import { RawQuery } from 'src/app/models/rawQuery';
import { SearchSub } from 'src/app/models/searchSub';
import { Observable } from 'rxjs';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private userInfoService: UserInfoService,
  ) {}

  //
  // ENTRIES
  //

  createEntry(entry: Entry, options) {
    return this.http.post<any>(`api/db/entry`, { entry, options }).pipe(
      map(response => {
        return response as Entry;
      }),
    );
  }

  updateEntry(entry: Entry) {
    return this.http.put<any>(`api/db/entry/${entry._id}`, entry).pipe(
      map(response => {
        return response;
      }),
    );
  }

  getEntry(entryId: any) {
    return this.http.get<any>(`api/db/entry/${entryId}`).pipe(
      map(response => {
        return response;
      }),
    );
  }

  uploadAttachment(entryId: any, f: FormData) {
    return this.http.post<any>(`api/db/entry/${entryId}/attachment`, f).pipe(
      map(response => {
        return response;
      }),
    );
  }

  downloadAttachment(entryId): Observable<any> {
    return this.http
      .get(`api/db/entry/${entryId}/attachment`, { responseType: 'blob' })
      .pipe(
        map(response => {
          return response;
        }),
      );
  }

  addNoteToEntry(entryId: any, author: string, content: string) {
    return this.http
      .put(`api/db/entry/${entryId}/note`, {
        author,
        content,
      })
      .pipe(
        map(response => {
          return response as Note[];
        }),
      );
  }

  deleteNoteFromEntry(entryId: any, noteId: any) {
    return this.http.delete(`api/db/entry/${entryId}/note/${noteId}`).pipe(
      map(response => {
        return response as Note[];
      }),
    );
  }

  getUniqueSubmitters() {
    return this.http.get('api/db/unique-submitters').pipe(
      map(response => {
        return response as String[];
      }),
    );
  }

  deleteEntry(entry) {
    return this.http.delete(`api/db/entry/${entry._id}`).pipe(
      map(response => {
        return response as Entry;
      }),
    );
  }

  flagEntryAsDeleted(entry) {
    return this.http.put(`api/db/entry/${entry._id}/flag`, {}).pipe(
      map(response => {
        return response as Entry;
      }),
    );
  }

  //
  // LOOKUP VALUES
  //

  getLookupValues() {
    return this.http.get(`api/db/lookup-value`).pipe(
      map(response => {
        return response as LookupValue[];
      }),
    );
  }

  addLookupValue(newValue: LookupValue) {
    return this.http.post(`api/db/lookup-value`, newValue).pipe(
      map(response => {
        return response as LookupValue;
      }),
    );
  }

  updateLookupValue(updatedVal: LookupValue) {
    return this.http
      .put(`api/db/lookup-value/${updatedVal._id}`, updatedVal)
      .pipe(
        map(response => {
          return response as LookupValue;
        }),
      );
  }

  deleteLookupValue(valId) {
    return this.http.delete(`api/db/lookup-value/${valId}`).pipe(
      map(response => {
        return response as LookupValue;
      }),
    );
  }

  //
  // USER
  //

  getAllUsers() {
    return this.http.get(`api/db/user`).pipe(
      map(response => {
        return response as User[];
      }),
    );
  }

  // Return new user or existing user with tag
  addUser(user) {
    return this.http.post(`api/db/user`, user).pipe(
      map(response => {
        return response as User;
      }),
    );
  }

  getUser(personId) {
    return this.http.get(`api/db/user/${personId}`).pipe(
      map(response => {
        return response as User;
      }),
    );
  }

  getUserNoPopulate(personId) {
    return this.http.get(`api/db/user/${personId}/no-populate`).pipe(
      map(response => {
        return response as User;
      }),
    );
  }

  updateUser(user) {
    return this.http.put(`api/db/user/${user.personId}`, user).pipe(
      map(response => {
        return response as User;
      }),
    );
  }

  deleteUser(personId) {
    return this.http.delete(`api/db/user/${personId}`).pipe(
      map(response => {
        return response as User;
      }),
    );
  }

  //
  // generating a complete new user requires mulitple steps
  //
  createUser(newUser): Promise<User> {
    return new Promise((resolve, reject) => {
      // Get info from api
      this.userInfoService.getUserInfo(newUser.personId).subscribe(
        userInfo => {
          newUser.email = userInfo['person'].email;
          newUser.name = userInfo['person'].displayName;
          this.addUser(newUser).subscribe(
            user => {
              console.log(user);
              resolve(user as User);
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

  addSubToUser(personId, sub) {
    return this.http.post(`api/db/user/${personId}/sub`, sub).pipe(
      map(response => {
        response as SearchSub[];
      }),
    );
  }

  removeSubFromUser(personId, subId) {
    return this.http.delete(`api/db/user/${personId}/sub/${subId}`).pipe(
      map(response => {
        return response as SearchSub[];
      }),
    );
  }

  addSharedSubToUser(personId, subId) {
    return this.http.post(`api/db/user/${personId}/shared-sub`, { subId }).pipe(
      map(response => {
        return response as SearchSub[];
      }),
    );
  }

  removeSharedSubFromUser(personId, subId) {
    return this.http.delete(`api/db/user/${personId}/shared-sub/${subId}`).pipe(
      map(response => {
        return response as SearchSub[];
      }),
    );
  }

  //
  //  Shared Subscriptions
  //

  getSharedSubs(author?) {
    return this.http.get(`api/db/shared-sub/${author ? author : ''}`).pipe(
      map(response => {
        return response as SearchSub[];
      }),
    );
  }

  createSharedSub(sub) {
    return this.http.post(`api/db/shared-sub`, sub).pipe(
      map(response => {
        return response as SearchSub;
      }),
    );
  }

  deleteSharedSub(id): Observable<SearchSub> {
    return this.http.delete(`api/db/shared-sub/${id}`).pipe(
      map(response => {
        return response as SearchSub;
      }),
    );
  }
}
