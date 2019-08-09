import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLookupValComponent } from './range-lookup-val.component';

describe('RangeLookupValComponent', () => {
  let component: RangeLookupValComponent;
  let fixture: ComponentFixture<RangeLookupValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeLookupValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLookupValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
