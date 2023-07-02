import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinstarComponent } from './coinstar.component';

describe('CoinstarComponent', () => {
  let component: CoinstarComponent;
  let fixture: ComponentFixture<CoinstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
