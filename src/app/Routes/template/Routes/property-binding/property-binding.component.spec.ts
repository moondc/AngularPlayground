import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PropertyBindingComponent } from './property-binding.component';

describe('PropertyBindingComponent', () => {
  let component: PropertyBindingComponent;
  let fixture: ComponentFixture<PropertyBindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
