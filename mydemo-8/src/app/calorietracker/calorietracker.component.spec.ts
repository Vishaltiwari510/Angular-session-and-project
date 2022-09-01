import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorietrackerComponent } from './calorietracker.component';

describe('CalorietrackerComponent', () => {
  let component: CalorietrackerComponent;
  let fixture: ComponentFixture<CalorietrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorietrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorietrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
