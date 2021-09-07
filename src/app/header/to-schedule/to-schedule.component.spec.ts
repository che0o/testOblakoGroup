import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToScheduleComponent } from './to-schedule.component';

describe('ToScheduleComponent', () => {
  let component: ToScheduleComponent;
  let fixture: ComponentFixture<ToScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
