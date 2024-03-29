import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassBindingComponent } from './class-binding.component';

describe('ClassBindingComponent', () => {
  let component: ClassBindingComponent;
  let fixture: ComponentFixture<ClassBindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
