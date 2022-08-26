import { TestBed } from '@angular/core/testing';

import { DnrGuard } from './dnr.guard';

describe('DnrGuard', () => {
  let guard: DnrGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DnrGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
