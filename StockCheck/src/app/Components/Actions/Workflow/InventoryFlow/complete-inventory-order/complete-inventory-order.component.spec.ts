import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInventoryOrderComponent } from './complete-inventory-order.component';

describe('CompleteInventoryOrderComponent', () => {
  let component: CompleteInventoryOrderComponent;
  let fixture: ComponentFixture<CompleteInventoryOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteInventoryOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteInventoryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
