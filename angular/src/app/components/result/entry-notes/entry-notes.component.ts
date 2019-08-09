import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user/user.service';
import { UtilService } from '../../../services/util/util.service';
import { ToastrService } from 'ngx-toastr';
import { Note } from '../../../models/entry';

@Component({
  selector: 'app-entry-notes',
  templateUrl: './entry-notes.component.html',
  styleUrls: ['./entry-notes.component.scss'],
})
export class EntryNotesComponent implements OnInit {
  @Input() entryId: string;

  private _notes: Note[];
  @Input() set notes(n: Note[]) {
    this._notes = n;
  }
  get notes(): Note[] {
    return this._notes;
  }

  newNote: string = '';

  dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private userService: UserService,
    private utilService: UtilService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.newNote.length) {
      // Add note to this entry
      this.userService.getUser().subscribe(user => {
        this.dataService
          .addNoteToEntry(this.entryId, user.name, this.newNote)
          .pipe(first())
          .subscribe(entryNotes => {
            console.log(entryNotes);
            this.notes = entryNotes;
            this.newNote = '';
          });
      });
    } else {
      this.toastr.warning(
        '',
        'Cannot submit blank note',
        this.utilService.msgOptions,
      );
    }
  }

  deleteNote(id) {
    this.dataService
      .deleteNoteFromEntry(this.entryId, id)
      .pipe(first())
      .subscribe(notes => {
        this.notes = notes;
      });
  }
}
