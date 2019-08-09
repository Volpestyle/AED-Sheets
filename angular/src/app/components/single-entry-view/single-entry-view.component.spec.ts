import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntryViewComponent } from './single-entry-view.component';

describe('SingleEntryViewComponent', () => {
  let component: SingleEntryViewComponent;
  let fixture: ComponentFixture<SingleEntryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEntryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEntryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
