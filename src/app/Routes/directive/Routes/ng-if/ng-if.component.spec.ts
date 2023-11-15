import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgIfComponent } from './ng-if.component';

describe('NgIfComponent', () => {
  let component: NgIfComponent;
  let fixture: ComponentFixture<NgIfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
