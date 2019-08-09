import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-user-val',
  templateUrl: './user-val.component.html',
  styleUrls: ['./user-val.component.scss'],
})
export class UserValComponent implements OnInit {
  @Input() user: any;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  editUser() {
    const modalRef = this.modalService.open(EditUserModalComponent);
    modalRef.componentInstance.heading = `Editing User`;
    modalRef.componentInstance.user = this.user;
  }

  openEditModal() {}
}
