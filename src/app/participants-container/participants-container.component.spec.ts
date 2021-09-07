import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsContainerComponent } from './participants-container.component';

describe('ParticipantsContainerComponent', () => {
  let component: ParticipantsContainerComponent;
  let fixture: ComponentFixture<ParticipantsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
