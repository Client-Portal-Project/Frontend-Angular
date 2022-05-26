import { TestBed } from '@angular/core/testing';

import { FileService } from './fileservice.service';

describe('FileserviceService', () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
