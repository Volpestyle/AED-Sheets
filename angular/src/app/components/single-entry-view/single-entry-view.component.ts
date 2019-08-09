import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { first } from 'rxjs/operators';
import { Entry } from 'src/app/models/entry';
import { UserService } from 'src/app/services/user/user.service';
import { RolesService } from 'src/app/services/roles/roles.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-single-entry-view',
  templateUrl: './single-entry-view.component.html',
  styleUrls: ['./single-entry-view.component.scss'],
})
export class SingleEntryViewComponent implements OnInit {
  entry: Entry;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private userService: UserService,
    private rolesService: RolesService,
  ) {
    this.route.params.subscribe(params => {
      this.dataService
        .getEntry(params.id)
        .pipe(first())
        .subscribe(entry => {
          this.entry = entry;
          console.log(this.entry);
        });
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.dataService.getUser(user.personId).subscribe(dbUser => {
        this.user = dbUser;
      });
    });
    this.rolesService.getAuthorizations();
  }

  delete() {
    this.entry.isDeleted = true;
  }
}
