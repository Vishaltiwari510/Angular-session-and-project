import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringComponent } from './flooring.component';

describe('FlooringComponent', () => {
  let component: FlooringComponent;
  let fixture: ComponentFixture<FlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
