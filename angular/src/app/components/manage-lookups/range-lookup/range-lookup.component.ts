import { Component, OnInit, Input } from '@angular/core';
import { Lookup, LookupValue } from 'src/app/models/lookup';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data/data.service';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';
import { UtilService } from 'src/app/services/util/util.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-range-lookup',
  templateUrl: './range-lookup.component.html',
  styleUrls: ['../lookup/lookup.component.scss'],
})
export class RangeLookupComponent implements OnInit {
  @Input() lookup: Lookup;
  seconds = true;

  gteVal;
  lteVal;
  title;

  private _lteInput: boolean;

  constructor(
    private modalService: NgbModal,
    private dataService: DataService,
    private utilService: UtilService,
    private toastr: ToastrService,
  ) {}

  sortByGte = (a, b) => (a.val.gte > b.val.gte ? 1 : -1);

  ngOnInit() {
    this.lookup.vals.sort(this.sortByGte);
  }

  set lteInput(val) {
    this._lteInput = val;
    this.lteVal = this._lteInput ? 'no limit' : undefined;
  }

  get lteInput() {
    return this._lteInput;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result;
  }

  close() {
    this.modalService.dismissAll();
    this.gteVal = '';
    this.lteVal = '';
  }

  onSubmit() {
    let gteSeconds;
    let lteSeconds;
    if (this.lteVal && this.gteVal) {
      this.getTitle();
      if (this.lteVal !== 'no limit') {
        lteSeconds = this.utilService.objToSeconds(this.lteVal);
      }
      gteSeconds = this.utilService.objToSeconds(this.gteVal);
      if (gteSeconds < lteSeconds || !lteSeconds) {
        this.dataService
          .addLookupValue(
            new LookupValue(
              this.lookup.name,
              { gte: gteSeconds, lte: lteSeconds },
              this.title,
            ),
          )
          .pipe(first())
          .subscribe(val => {
            this.lookup.vals.push(val);
            this.lookup.vals.sort(this.sortByGte);
            this.lteVal = undefined;
            this.gteVal = undefined;
            this.lteInput = false;
            this.close();
            this.toastr.success(
              '',
              `New value ${val.title} has been added`,
              this.utilService.msgOptions,
            );
          });
      } else
        this.toastr.warning('', `Invalid values`, this.utilService.msgOptions);
    } else
      this.toastr.warning(
        '',
        `Please fill out all fields`,
        this.utilService.msgOptions,
      );
  }

  getTitle() {
    this.title = `${this.utilService.objToHms(this.gteVal)}${
      this.lteVal === 'no limit'
        ? ` +`
        : ` to ${this.utilService.objToHms(this.lteVal)}`
    }`;
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
