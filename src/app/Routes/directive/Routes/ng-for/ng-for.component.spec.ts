import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgForComponent } from './ng-for.component';

describe('NgForComponent', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
