import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendinggifComponent } from './trendinggif.component';

describe('TrendinggifComponent', () => {
  let component: TrendinggifComponent;
  let fixture: ComponentFixture<TrendinggifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendinggifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendinggifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
