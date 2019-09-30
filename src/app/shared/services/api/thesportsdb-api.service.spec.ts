import { TestBed } from '@angular/core/testing';

import { ThesportsdbApiService } from './thesportsdb-api.service';

xdescribe('ThesportsdbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThesportsdbApiService = TestBed.get(ThesportsdbApiService);
    expect(service).toBeTruthy();
  });
});
