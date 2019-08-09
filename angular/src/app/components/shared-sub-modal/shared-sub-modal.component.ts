import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchSub } from 'src/app/models/searchSub';
import { DataService } from 'src/app/services/data/data.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from 'src/app/services/util/util.service';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shared-sub-modal',
  templateUrl: './shared-sub-modal.component.html',
  styleUrls: ['./shared-sub-modal.component.scss'],
})
export class SharedSubModalComponent implements OnInit {
  @Input() heading: string;
  @Input() user: User;
  addSub: Subject<SearchSub> = new Subject();

  constructor(
    public activeModal: NgbActiveModal,
    private dataService: DataService,
    private toastr: ToastrService,
    private utilService: UtilService,
  ) {}

  sharedSubs: SearchSub[];
  userSharedIds: string[] = [];

  ngOnInit() {
    this.userSharedIds = this.user.sharedSubs.map(sub => sub._id);
    this.dataService.getSharedSubs().subscribe(subs => {
      this.sharedSubs = subs;
      console.log(this.user.sharedSubs);
    });
  }

  onAddSub(sub) {
    this.addSub.next(sub);
  }
}
