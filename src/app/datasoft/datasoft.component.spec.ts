import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasoftComponent } from './datasoft.component';

describe('DatasoftComponent', () => {
  let component: DatasoftComponent;
  let fixture: ComponentFixture<DatasoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
