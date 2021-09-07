import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMembersComponent } from './available-members.component';

describe('AvailableMembersComponent', () => {
  let component: AvailableMembersComponent;
  let fixture: ComponentFixture<AvailableMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
