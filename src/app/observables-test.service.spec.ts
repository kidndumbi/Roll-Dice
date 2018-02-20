import { TestBed, inject } from '@angular/core/testing';

import { ObservablesTestService } from './observables-test.service';

describe('ObservablesTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservablesTestService]
    });
  });

  it('should be created', inject([ObservablesTestService], (service: ObservablesTestService) => {
    expect(service).toBeTruthy();
  }));
});
