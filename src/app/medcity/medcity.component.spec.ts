import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcityComponent } from './medcity.component';

describe('MedcityComponent', () => {
  let component: MedcityComponent;
  let fixture: ComponentFixture<MedcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
