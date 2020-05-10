import { TestBed } from '@angular/core/testing';

import { ItemsProvider } from './items.provider';

describe('ItemProviderService', () => {
  let service: ItemsProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
