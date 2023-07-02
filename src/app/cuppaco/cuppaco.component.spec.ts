import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuppacoComponent } from './cuppaco.component';

describe('CuppacoComponent', () => {
  let component: CuppacoComponent;
  let fixture: ComponentFixture<CuppacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuppacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuppacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
