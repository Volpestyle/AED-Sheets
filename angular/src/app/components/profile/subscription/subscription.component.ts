import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { RawQuery } from 'src/app/models/rawQuery';
import { SearchSub } from 'src/app/models/searchSub';
import { UtilService } from 'src/app/services/util/util.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  @Input() sub: SearchSub;
  @Input() challenge: boolean;
  @Output() onDelete = new EventEmitter();

  props = [];

  constructor(
    private utilService: UtilService,
    private modalService: NgbModal,
  ) {}

  @ViewChild('content', { static: false }) private content;

  ngOnInit() {
    Object.keys(this.sub.rawQuery).forEach(key => {
      let val = this.sub.rawQuery[key];
      this.props.push(this.utilService.formatRawQueryVal(key, val));
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result;
  }

  onDeleteClick() {
    if (this.challenge) {
      this.open(this.content);
    } else {
      this.onDelete.emit(this.sub);
    }
  }

  delete() {
    this.onDelete.emit(this.sub);
    this.modalService.dismissAll();
  }
}
