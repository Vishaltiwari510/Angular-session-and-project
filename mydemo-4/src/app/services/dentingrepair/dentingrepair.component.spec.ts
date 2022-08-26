import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentingrepairComponent } from './dentingrepair.component';

describe('DentingrepairComponent', () => {
  let component: DentingrepairComponent;
  let fixture: ComponentFixture<DentingrepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentingrepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentingrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
