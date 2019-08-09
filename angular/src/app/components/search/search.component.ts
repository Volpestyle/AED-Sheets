import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbDate, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data/data.service';
import { first, delay } from 'rxjs/operators';
import { Entry, Note } from '../../models/entry';
import { SearchService } from '../../services/search/search.service';
import { RawQuery } from 'src/app/models/rawQuery';
import { Lookup } from '../../models/lookup';
import { LookupsService } from 'src/app/services/lookups/lookups.service';
import { UserService } from 'src/app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from 'src/app/services/util/util.service';
import { SearchSub } from 'src/app/models/searchSub';
import { SubscribeModalComponent } from '../subscribe-modal/subscribe-modal.component';
import { RolesService } from 'src/app/services/roles/roles.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService, LookupsService],
})
export class SearchComponent implements OnInit {
  //Search button
  isLoading: boolean = false;

  //Subscribe button
  isSaving: boolean = false;

  //Output Csv
  isOutputting: boolean = false;

  //Load more btn
  isLoadingMore: boolean = false;

  // Date range picker
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  range_date: string = 'No range selected';

  // Search Query
  techNames: any;

  lookups: Lookup[];
  techNameModel = [];
  locationModel = [];
  showModel = [];
  classModel = [];
  heardOnAirModel = [];
  actionTakenModel = [];
  durationModel = {};

  onAirModel: boolean = null;
  funderModel: boolean = null;
  serviceTicket: boolean = null;
  entryModel: string = null;
  eTagModel: string = null;

  dropdownSettings;

  rawQuery: RawQuery;
  currentQuery: any;

  results: any = { results: {}, count: 0 };

  //Duration lookup
  isEditingDuration: boolean = false;

  //User
  user: User;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private searchService: SearchService,
    private userService: UserService,
    private lookupsService: LookupsService,
    private modalService: NgbModal,
    private rolesService: RolesService,
    private toastr: ToastrService,
    private utilService: UtilService,
  ) {
    this.lookupsService.getLookups();
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.dataService.getUser(user.personId).subscribe(dbUser => {
        this.user = dbUser;
      });
    });
    this.rolesService.getAuthorizations();
    this.getTechNames();
    this.dropdownSettings = {
      singleSelection: false,
      itemsShowLimit: 3,
      idField: '_id',
      textField: 'val',
      allowSearchFilter: true,
      enableCheckAll: false,
    };
  }

  getTechNames() {
    this.dataService
      .getUniqueSubmitters()
      .pipe(first())
      .subscribe(names => {
        let set = new Set(
          names.map(name => this.utilService.titleCase(name.trim())).sort(),
        );
        this.techNames = Array.from(set).map((name, index) => {
          return { _id: index, val: name };
        });
      });
  }

  onSubmit() {
    this.isLoading = true;
    this.rawQuery = new RawQuery(
      0,
      5,
      this.formattedFromDate,
      this.formattedToDate,
      this.techNameModel.map(({ val }) => val),
      this.locationModel.map(({ val }) => val),
      this.showModel.map(({ val }) => val),
      this.classModel.map(({ val }) => val),
      this.heardOnAirModel.map(({ val }) => val),
      this.actionTakenModel.map(({ val }) => val),
      this.durationModel,
      this.onAirModel,
      this.funderModel,
      this.serviceTicket,
      this.eTagModel,
      this.entryModel,
    );
    this.currentQuery = this.searchService.buildQuery(this.rawQuery);
    this.searchService
      .searchEntries(this.currentQuery)
      .then(results => {
        this.results = results;
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  loadMore() {
    this.isLoadingMore = true;
    this.currentQuery.size += 10;
    this.searchService
      .searchEntries(this.currentQuery)
      .then(results => {
        this.results = results;
        this.isLoadingMore = false;
      })
      .catch(err => {
        console.log(err);
        this.isLoadingMore = false;
      });
  }

  // Pull the already formatted dates from the input value box
  get formattedFromDate() {
    return this.fromDate ? this.range_date.split(' ')[0] : null;
  }
  get formattedToDate() {
    if (this.fromDate && !this.toDate) {
      return undefined;
    } else return this.toDate ? this.range_date.split(' ')[2] : null;
  }

  onDateSelection(date: NgbDate, d) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.range_date = d._parserFormatter.format(this.fromDate);
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.range_date =
        d._parserFormatter.format(this.fromDate) +
        ' to ' +
        d._parserFormatter.format(this.toDate);
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.range_date = d._parserFormatter.format(this.fromDate);
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      date.equals(this.toDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  openSubscribeModal() {
    this.onSubmit();
    let options = {
      canAddToOtherUser: true,
      canEnterName: true,
      canCreateShared: true,
    };
    const modalRef = this.modalService.open(SubscribeModalComponent);
    modalRef.componentInstance.heading = 'Subscribe to this search';
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.query = this.currentQuery;
    modalRef.componentInstance.rawQuery = this.rawQuery;
    modalRef.componentInstance.options = options;
  }

  outputToCsv() {
    this.onSubmit();
    this.isOutputting = true;
    this.searchService.outputToCsv(this.currentQuery).then(() => {
      this.isOutputting = false;
    });
  }
}
