import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgifComponent } from './searchgif.component';

describe('SearchgifComponent', () => {
  let component: SearchgifComponent;
  let fixture: ComponentFixture<SearchgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
