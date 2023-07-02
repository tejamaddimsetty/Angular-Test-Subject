import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadoxComponent } from './paradox.component';

describe('ParadoxComponent', () => {
  let component: ParadoxComponent;
  let fixture: ComponentFixture<ParadoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParadoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
