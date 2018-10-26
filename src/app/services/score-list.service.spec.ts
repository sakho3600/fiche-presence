import { TestBed, inject } from '@angular/core/testing';

import { ScoreListService } from './score-list.service';

describe('ScoreListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreListService]
    });
  });

  it('should be created', inject([ScoreListService], (service: ScoreListService) => {
    expect(service).toBeTruthy();
  }));
});
