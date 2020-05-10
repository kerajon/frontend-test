import { TestBed } from '@angular/core/testing';

import { ItemProviderService } from './item-provider.service';

describe('ItemProviderService', () => {
  let service: ItemProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
