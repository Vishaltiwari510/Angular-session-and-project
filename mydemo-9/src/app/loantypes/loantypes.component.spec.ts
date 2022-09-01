import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoantypesComponent } from './loantypes.component';

describe('LoantypesComponent', () => {
  let component: LoantypesComponent;
  let fixture: ComponentFixture<LoantypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoantypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoantypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
