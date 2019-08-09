import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNotesComponent } from './entry-notes.component';

describe('EntryNotesComponent', () => {
  let component: EntryNotesComponent;
  let fixture: ComponentFixture<EntryNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
