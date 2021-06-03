import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitechComponent } from './minitech.component';

describe('MinitechComponent', () => {
  let component: MinitechComponent;
  let fixture: ComponentFixture<MinitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinitechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
