import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasyunComponent } from './fasyun.component';

describe('FasyunComponent', () => {
  let component: FasyunComponent;
  let fixture: ComponentFixture<FasyunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasyunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
