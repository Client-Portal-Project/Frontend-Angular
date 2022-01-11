import { TestBed } from '@angular/core/testing';

import { FileserviceService } from './fileservice.service';

describe('FileserviceService', () => {
  let service: FileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
