import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchSub } from 'src/app/models/searchSub';
import { UtilService } from 'src/app/services/util/util.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared-sub',
  templateUrl: './shared-sub.component.html',
  styleUrls: ['./shared-sub.component.scss'],
})
export class SharedSubComponent implements OnInit {
  @Input() sub: SearchSub;
  @Input() singleSelect: boolean;
  @Output() onAdd = new EventEmitter();
  @Output() onChoose = new EventEmitter();
  @Input() added: boolean;
  props = [];

  constructor(
    private utilService: UtilService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    Object.keys(this.sub.rawQuery).forEach(key => {
      let val = this.sub.rawQuery[key];
      this.props.push(this.utilService.formatRawQueryVal(key, val));
    });
  }

  addSub() {
    this.onAdd.emit(this.sub);
    this.added = true;
  }

  chooseSub() {
    this.onChoose.emit(this.sub);
  }
}
