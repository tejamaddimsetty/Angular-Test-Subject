import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplyComponent } from './shoply.component';

describe('ShoplyComponent', () => {
  let component: ShoplyComponent;
  let fixture: ComponentFixture<ShoplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
