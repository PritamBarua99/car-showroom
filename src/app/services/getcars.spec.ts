import { TestBed } from '@angular/core/testing';

import { Getcars } from './getcars';

describe('Getcars', () => {
  let service: Getcars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getcars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
