import { TestBed, inject } from '@angular/core/testing';

import { App.StorageService } from './app.storage.service';

describe('App.StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.StorageService]
    });
  });

  it('should be created', inject([App.StorageService], (service: App.StorageService) => {
    expect(service).toBeTruthy();
  }));
});
