import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSubModalComponent } from './shared-sub-modal.component';

describe('SharedSubModalComponent', () => {
  let component: SharedSubModalComponent;
  let fixture: ComponentFixture<SharedSubModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSubModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSubModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
