import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLookupComponent } from './range-lookup.component';

describe('RangeLookupComponent', () => {
  let component: RangeLookupComponent;
  let fixture: ComponentFixture<RangeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
