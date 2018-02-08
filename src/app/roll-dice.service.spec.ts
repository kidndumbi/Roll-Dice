import { TestBed, inject } from '@angular/core/testing';

import { RollDiceService } from './roll-dice.service';

describe('RollDiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollDiceService]
    });
  });

  it('should be created', inject([RollDiceService], (service: RollDiceService) => {
    expect(service).toBeTruthy();
  }));
});
