import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverpayComponent } from './overpay.component';

describe('OverpayComponent', () => {
  let component: OverpayComponent;
  let fixture: ComponentFixture<OverpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
