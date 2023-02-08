import { TestBed } from '@angular/core/testing';

import { AuthorResolver } from './author.resolver';

describe('AuthorResolver', () => {
  let resolver: AuthorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AuthorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
