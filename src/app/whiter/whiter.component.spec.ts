import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiterComponent } from './whiter.component';

describe('WhiterComponent', () => {
  let component: WhiterComponent;
  let fixture: ComponentFixture<WhiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
