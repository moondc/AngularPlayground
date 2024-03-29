import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BindingSyntaxComponent } from './binding-syntax.component';

describe('BindingSyntaxComponent', () => {
  let component: BindingSyntaxComponent;
  let fixture: ComponentFixture<BindingSyntaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
