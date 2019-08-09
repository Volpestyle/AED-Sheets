import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';
import { EditEntryModalComponent } from '../edit-entry-modal/edit-entry-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Entry } from 'src/app/models/entry';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [],
})
export class ResultComponent implements OnInit {
  @Input() result: Entry;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  info: any;
  isEditing: boolean = false;

  constructor(
    private utilService: UtilService,
    private dataService: DataService,
    private modalService: NgbModal,
    private rolesService: RolesService,
  ) {}

  ngOnInit() {
    this.info = [
      {
        title: 'Location',
        value: this.result.location,
      },
      { title: 'Show', value: this.result.show },
      {
        title: 'Classification',
        value: this.result.classification,
      },
      {
        title: 'What was heard on air',
        value: this.result.heardOnAir,
      },
      {
        title: 'Action Taken by drive tech',
        value: this.result.actionTaken,
      },
      {
        title: 'Duration',
        value: this.result.duration
          ? this.utilService.formatSeconds(this.result.duration)
          : 'N/A',
      },
      {
        title: 'On Air',
        value:
          this.result.onAir === true
            ? 'Yes'
            : this.result.onAir === false
            ? 'No'
            : 'N/A',
      },
      {
        title: 'Funder',
        value:
          this.result.funder === true
            ? 'Yes'
            : this.result.funder === false
            ? 'No'
            : 'N/A',
      },
      {
        title: 'Service Ticket Created',
        value:
          this.result.serviceTicket === true
            ? 'Yes'
            : this.result.serviceTicket === false
            ? 'No'
            : 'N/A',
      },
    ];
  }

  deleteEntry() {
    this.dataService
      .flagEntryAsDeleted(this.result)
      .pipe(first())
      .subscribe(deletedEntry => {
        this.onDelete.emit(deletedEntry._id);
      });
  }

  openEditModal() {
    const modalRef = this.modalService.open(EditEntryModalComponent);
    modalRef.componentInstance.heading = 'Edit this D-Sheet';
    modalRef.componentInstance.entry = this.result;
    modalRef.componentInstance.refresh.subscribe(v => {
      this.ngOnInit();
    });
  }

  downloadAttachment() {
    this.dataService.downloadAttachment(this.result._id).subscribe(res => {
      console.log(res);
      const blob = new Blob([res], {
        type: res.type,
      });
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL);
    });
  }
}
