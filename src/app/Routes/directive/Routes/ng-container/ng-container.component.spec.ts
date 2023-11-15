import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgContainerComponent } from './ng-container.component';

describe('NgContainerComponent', () => {
  let component: NgContainerComponent;
  let fixture: ComponentFixture<NgContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
