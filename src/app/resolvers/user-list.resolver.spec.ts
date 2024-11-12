import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userListResolver } from './user-list.resolver';

describe('userListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      userListResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
