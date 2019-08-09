import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LookupValue } from 'src/app/models/lookup';
import { DataService } from 'src/app/services/data/data.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lookup-val',
  templateUrl: './lookup-val.component.html',
  styleUrls: ['./lookup-val.component.scss'],
})
export class LookupValComponent implements OnInit {
  @Input() lookupValue: LookupValue;
  @Output() onDelete = new EventEmitter();
  @Output() onSave = new EventEmitter();

  isEditing: boolean = false;
  newVal: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  edit() {
    this.isEditing = true;
    this.newVal = this.lookupValue.val;
  }

  cancel() {
    this.isEditing = false;
  }

  save() {
    if (this.newVal) {
      this.lookupValue.val = this.newVal;
      this.dataService
        .updateLookupValue(this.lookupValue)
        .pipe(first())
        .subscribe(
          newVal => {
            this.isEditing = false;
          },
          err => {
            console.log(err);
          },
        );
    }
  }

  delete() {
    this.onDelete.emit(this.lookupValue._id);
  }
}
