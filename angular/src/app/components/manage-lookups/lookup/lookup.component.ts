import { Component, OnInit, Input } from '@angular/core';
import { Lookup, LookupValue } from 'src/app/models/lookup';
import { DataService } from 'src/app/services/data/data.service';
import { first } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util/util.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss'],
})
export class LookupComponent implements OnInit {
  @Input() lookup: Lookup;
  newVal: string = '';

  handleDel: any;

  private _isAlphaSorted: boolean = false;

  constructor(
    private dataService: DataService,
    private utilService: UtilService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

  get isAlphaSorted() {
    return this._isAlphaSorted;
  }

  set isAlphaSorted(val) {
    this._isAlphaSorted = val;
    this.checkAlphaSort();
  }

  checkAlphaSort() {
    if (this.isAlphaSorted)
      this.lookup.vals.sort((a, b) => (a.val > b.val ? -1 : 1));
  }

  addVal() {
    if (this.newVal) {
      this.dataService
        .addLookupValue(new LookupValue(this.lookup.name, this.newVal))
        .pipe(first())
        .subscribe(
          newVal => {
            this.lookup.vals.push(newVal);
            this.newVal = '';
            this.checkAlphaSort();
          },
          err => {
            console.log(err);
          },
        );
    } else
      this.toastr.error(
        '',
        'New value cannot be blank',
        this.utilService.msgOptions,
      );
  }

  delete(valueId) {
    this.dataService
      .deleteLookupValue(valueId)
      .pipe(first())
      .subscribe(
        deletedValue => {
          this.lookup.vals = this.lookup.vals.filter(
            v => v._id !== deletedValue._id,
          );
          this.checkAlphaSort();
        },
        err => {
          console.log(err);
          this.toastr.error(
            'Please try again later',
            'There was an error deleteing this value',
            this.utilService.msgOptions,
          );
        },
      );
  }
}
