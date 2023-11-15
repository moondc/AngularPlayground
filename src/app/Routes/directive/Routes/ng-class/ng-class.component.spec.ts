import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgClassComponent } from './ng-class.component';

describe('NgClassComponent', () => {
  let component: NgClassComponent;
  let fixture: ComponentFixture<NgClassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
