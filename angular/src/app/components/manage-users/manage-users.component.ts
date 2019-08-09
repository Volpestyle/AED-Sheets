import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}

  public model: any;

  users: any;
  results: any = [];
  typeahead: string[];

  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    // Get the number of users first
    this.userInfoService
      .getAllUsers()
      .then(users => {
        console.log(users);
        this.users = users;
        this.typeahead = this.users.map(u => u.displayName);
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange() {
    if (this.model.length > 1) {
      this.results = this.users
        .filter(
          v =>
            v.displayName.toLowerCase().indexOf(this.model.toLowerCase()) > -1,
        )
        .slice(0, 30);
    } else {
      this.results = [];
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.typeahead
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 5),
      ),
    );
}
