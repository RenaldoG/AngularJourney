import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIndicatorDetailsComponent } from './step-indicator-details.component';

describe('StepIndicatorDetailsComponent', () => {
  let component: StepIndicatorDetailsComponent;
  let fixture: ComponentFixture<StepIndicatorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepIndicatorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIndicatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
