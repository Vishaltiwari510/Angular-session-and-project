import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashComponent } from './carwash.component';

describe('CarwashComponent', () => {
  let component: CarwashComponent;
  let fixture: ComponentFixture<CarwashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
