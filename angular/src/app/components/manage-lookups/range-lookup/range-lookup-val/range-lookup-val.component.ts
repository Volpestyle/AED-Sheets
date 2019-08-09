import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LookupValue } from 'src/app/models/lookup';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-range-lookup-val',
  templateUrl: './range-lookup-val.component.html',
  styleUrls: ['../../lookup/lookup-val/lookup-val.component.scss'],
})
export class RangeLookupValComponent implements OnInit {
  @Input() lookupValue: LookupValue;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private utilService: UtilService) {}

  ngOnInit() {}

  delete() {
    this.onDelete.emit(this.lookupValue._id);
  }
}
