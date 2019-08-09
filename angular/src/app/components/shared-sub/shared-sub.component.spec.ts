import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSubComponent } from './shared-sub.component';

describe('SharedSubComponent', () => {
  let component: SharedSubComponent;
  let fixture: ComponentFixture<SharedSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
