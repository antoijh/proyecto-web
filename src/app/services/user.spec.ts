import { TestBed } from '@angular/core/testing';

import { UserServivce } from './user';

describe('UserService', () => {
  let service: UserServivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
