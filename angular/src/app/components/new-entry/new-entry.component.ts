import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  NgbTimeStruct,
  NgbDatepickerConfig,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../services/data/data.service';
import { first } from 'rxjs/operators';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user/user.service';
import { UtilService } from '../../services/util/util.service';
import { Lookup, LookupValue } from '../../models/lookup';
import { LookupsService } from 'src/app/services/lookups/lookups.service';
import { Router } from '@angular/router';
import { Entry } from 'src/app/models/entry';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss'],
  providers: [NgbDatepickerConfig, LookupsService],
})
export class NewEntryComponent implements OnInit {
  date: NgbDate;
  formattedDate: any;
  time: any;
  duration: any;
  CreateForm: FormGroup;
  submittedBy: string;

  infos = [];

  fileToUpload: File = null;
  imgURL: any;
  videoURL: any;

  submitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalService: NgbModal,
    private userService: UserService,
    private utilService: UtilService,
    private lookupsService: LookupsService,
    private toastr: ToastrService,
    private router: Router,
    private config: NgbDatepickerConfig,
    private calendar: NgbCalendar,
  ) {
    config.maxDate = calendar.getToday();
    this.lookupsService.getLookups();
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.submittedBy = user.name;
    });
    this.CreateForm = this.fb.group({
      locationControl: ['', Validators.required],
      showControl: ['', Validators.required],
      classificationControl: ['', Validators.required],
      heardOnAirControl: ['', Validators.required],
      actionTakenControl: ['', Validators.required],
      whatActuallyHappenedControl: ['', Validators.required],
      eTagControl: [''],
      onAirControl: [false],
      funderControl: [false],
      serviceTicketControl: [false],
    });

    //Initialize date and time to current date and time
    let today = new Date();
    this.date = new NgbDate(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate(),
    );

    this.formattedDate = `${
      this.date.year
    }-${this.date.month
      .toString()
      .padStart(2, '0')}-${this.date.day.toString().padStart(2, '0')}`;

    this.time = {
      hour: today.getHours(),
      minute: today.getMinutes(),
      second: today.getSeconds(),
    };
  }

  onDateSelection(date: NgbDate, d) {
    this.formattedDate = d._parserFormatter.format(date);
  }

  formatTime(time) {
    let res = '';
    res += time.hour.toString().padStart(2, '0') + `:`;
    res += time.minute.toString().padStart(2, '0') + `:`;
    res += time.second.toString().padStart(2, '0');
    return res;
  }

  get dateObj() {
    return new Date(`${this.formattedDate}T${this.formatTime(this.time)}`);
  }

  onSubmit() {
    this.submitting = true;
    this.dataService
      .createEntry(
        new Entry(
          this.submittedBy,
          this.dateObj,
          this.form.locationControl.value,
          this.form.showControl.value,
          this.form.classificationControl.value,
          this.form.heardOnAirControl.value,
          this.form.actionTakenControl.value,
          this.form.onAirControl.value,
          this.form.funderControl.value,
          this.utilService.objToSeconds(this.duration),
          this.form.eTagControl.value,
          this.form.whatActuallyHappenedControl.value,
          this.form.serviceTicketControl.value,
        ),
        { isLive: true },
      )
      .pipe(first())
      .subscribe(
        newEntry => {
          console.log(newEntry);
          if (this.fileToUpload) {
            const fd = new FormData();
            fd.append('attachment', this.fileToUpload);
            this.dataService
              .uploadAttachment(newEntry._id, fd)
              .pipe(first())
              .subscribe(updatedEntry => {
                console.log(updatedEntry);
              });
          }
          this.submitting = false;
          this.modalService.dismissAll();
          this.resetForms();
          this.toastr.success(
            '',
            `D-Sheet has been submitted`,
            this.utilService.msgOptions,
          );
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
          this.submitting = false;
          this.toastr.error(
            'Please try again later',
            `There was a problem submitting this D-Sheet`,
            this.utilService.msgOptions,
          );
        },
      );
  }

  open(content) {
    if (
      this.CreateForm.valid &&
      this.date != null &&
      this.time != null &&
      this.duration != null
    ) {
      this.populateModalInfo();
      this.modalService
        .open(content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then(
          closed => {
            this.infos = [];
          },
          dismissed => {
            this.infos = [];
          },
        );
    } else {
      this.toastr.warning(
        '',
        `Please complete all required(*) fields.`,
        this.utilService.msgOptions,
      );
    }
  }

  resetForms() {
    this.CreateForm.reset({
      locationControl: '',
      classificationControl: '',
      heardOnAirControl: '',
      showControl: '',
      actionTakenControl: '',
      whatActuallyHappenedControl: '',
      onAirControl: false,
      funderControl: false,
      serviceTicketControl: false,
    });
    this.date = null;
    this.time = null;
    this.duration = null;
  }

  get form() {
    return this.CreateForm.controls;
  }

  populateModalInfo() {
    this.infos.push({
      title: 'Submitted by:',
      data: this.submittedBy,
    });
    this.infos.push({
      title: 'Date:',
      data: this.dateObj,
    });
    this.infos.push({
      title: 'Location:',
      data: this.form.locationControl.value,
    });
    this.infos.push({
      title: 'Show:',
      data: this.form.showControl.value,
    });
    this.infos.push({
      title: 'Classification:',
      data: this.form.classificationControl.value,
    });
    this.infos.push({
      title: 'What was heard on air:',
      data: this.form.heardOnAirControl.value,
    });
    this.infos.push({
      title: 'Action taken by drive tech:',
      data: this.form.actionTakenControl.value,
    });
    this.infos.push({
      title: 'On Air:',
      data: this.form.onAirControl.value ? 'Yes' : 'No',
    });
    this.infos.push({
      title: 'Funder:',
      data: this.form.funderControl.value ? 'Yes' : 'No',
    });
    this.infos.push({
      title: 'Duration:',
      data: `${this.duration.hour} hours, ${this.duration.minute} minutes, ${
        this.duration.second
      } seconds`,
    });
    if (this.form.eTagControl.value) {
      this.infos.push({
        title: 'E-Tag:',
        data: this.form.eTagControl.value,
      });
    }
    this.infos.push({
      title: 'What actually happened:',
      data: this.form.whatActuallyHappenedControl.value,
    });
    this.infos.push({
      title: 'Create IT Service Ticket:',
      data: this.form.serviceTicketControl.value ? 'Yes' : 'No',
    });
  }

  @ViewChild('labelImport', { static: false }) labelImport!: ElementRef;

  onFileChange(files: FileList) {
    if (files.item(0).size > 1024 * 1024 * 100) {
      this.toastr.error('Files must be under 100mb', 'File too big', {
        positionClass: 'toast-top-center',
        closeButton: true,
        timeOut: 3000,
      });
      return;
    }
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
    if (files.item(0).type.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onload = _event => {
        this.imgURL = reader.result;
      };
    }
  }
}
