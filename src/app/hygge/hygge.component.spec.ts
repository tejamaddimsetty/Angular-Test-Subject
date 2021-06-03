import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyggeComponent } from './hygge.component';

describe('HyggeComponent', () => {
  let component: HyggeComponent;
  let fixture: ComponentFixture<HyggeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyggeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyggeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
