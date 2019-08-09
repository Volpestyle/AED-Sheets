import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValComponent } from './user-val.component';

describe('UserValComponent', () => {
  let component: UserValComponent;
  let fixture: ComponentFixture<UserValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
