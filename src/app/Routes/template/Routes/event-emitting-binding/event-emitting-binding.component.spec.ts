import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventEmittingBindingComponent } from './event-emitting-binding.component';

describe('EventEmittingBindingComponent', () => {
  let component: EventEmittingBindingComponent;
  let fixture: ComponentFixture<EventEmittingBindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmittingBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmittingBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
