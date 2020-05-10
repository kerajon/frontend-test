import { TestBed } from '@angular/core/testing';

import { FetchItemsService } from './fetch-items.service';

describe('FetchItemsService', () => {
  let service: FetchItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
