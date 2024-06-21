import { TestBed } from '@angular/core/testing';

import { I18nLoaderService } from './i18n-loader.service';

describe('I18nLoaderService', () => {
  let service: I18nLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
