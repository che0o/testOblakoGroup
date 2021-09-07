import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFilterComponent } from './filter.component';

describe('CustomizeFilterComponent', () => {
  let component: CustomizeFilterComponent;
  let fixture: ComponentFixture<CustomizeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
