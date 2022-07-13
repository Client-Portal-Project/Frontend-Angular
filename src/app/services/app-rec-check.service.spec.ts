import { TestBed } from '@angular/core/testing';

import { AppRecCheckService } from './app-rec-check.service';

describe('AppRecCheckService', () => {
  let service: AppRecCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRecCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
