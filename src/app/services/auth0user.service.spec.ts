import { TestBed } from '@angular/core/testing';

import { Auth0userService } from './auth0user.service';

describe('Auth0userService', () => {
  let service: Auth0userService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth0userService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
