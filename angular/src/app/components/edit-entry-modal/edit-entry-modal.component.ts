import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Entry } from 'src/app/models/entry';
import { LookupsService } from 'src/app/services/lookups/lookups.service';
import { UtilService } from 'src/app/services/util/util.service';
import { DataService } from 'src/app/services/data/data.service';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-entry-modal',
  templateUrl: './edit-entry-modal.component.html',
  styleUrls: ['./edit-entry-modal.component.scss'],
  providers: [LookupsService],
})
export class EditEntryModalComponent implements OnInit {
  @Input() entry: Entry;
  modifiedBy: string;
  name: string;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private lookupsService: LookupsService,
    public activeModal: NgbActiveModal,
    private utilService: UtilService,
    private userService: UserService,
    private dataService: DataService,
  ) {
    this.lookupsService.getLookups();
  }

  editForm: FormGroup;
  duration: any;
  isSaving: boolean;
  refresh: Subject<boolean> = new Subject();

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.name = user.name;
    });
    this.duration = this.utilService.secondsToObj(this.entry.duration);
    this.editForm = this.fb.group({
      locationControl: [this.entry.location],
      showControl: [this.entry.show],
      classificationControl: [this.entry.classification],
      heardOnAirControl: [this.entry.heardOnAir],
      actionTakenControl: [this.entry.actionTaken],
      whatActuallyHappenedControl: [this.entry.entry],
      eTagControl: [this.entry.eTag],
      onAirControl: [this.entry.onAir],
      funderControl: [this.entry.funder],
      serviceTicketControl: [
        { value: this.entry.serviceTicket, disabled: true },
      ],
    });
  }

  get form() {
    return this.editForm.controls;
  }

  onSave() {
    this.isSaving = true;
    this.entry.location = this.form.locationControl.value;
    this.entry.show = this.form.showControl.value;
    this.entry.classification = this.form.classificationControl.value;
    this.entry.heardOnAir = this.form.heardOnAirControl.value;
    this.entry.actionTaken = this.form.actionTakenControl.value;
    this.entry.entry = this.form.whatActuallyHappenedControl.value;
    this.entry.eTag = this.form.eTagControl.value;
    this.entry.duration = this.utilService.objToSeconds(this.duration);
    this.entry.onAir = this.form.onAirControl.value;
    this.entry.funder = this.form.funderControl.value;
    this.entry.serviceTicket = this.form.serviceTicketControl.value;
    this.entry.modifiedBy = this.name;
    this.entry.modifiedAt = new Date();

    this.dataService.updateEntry(this.entry).subscribe(entry => {
      console.log(entry);
      this.isSaving = false;
      this.refresh.next(true);
      this.modalService.dismissAll();
    });
  }
}
