import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSharedSubscriptionComponent } from './assign-shared-subscription.component';

describe('AssignSharedSubscriptionComponent', () => {
  let component: AssignSharedSubscriptionComponent;
  let fixture: ComponentFixture<AssignSharedSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSharedSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSharedSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
