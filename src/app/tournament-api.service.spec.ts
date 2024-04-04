import { TestBed } from '@angular/core/testing';

import { TournamentApiService } from './tournament-api.service';

describe('TournamentApiService', () => {
  let service: TournamentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
