import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupValComponent } from './lookup-val.component';

describe('LookupValComponent', () => {
  let component: LookupValComponent;
  let fixture: ComponentFixture<LookupValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
