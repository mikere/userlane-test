import { TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return the user by id', () => {
      service.getUser('13').subscribe((result) => {
        expect(result).toEqual(
          jasmine.objectContaining({
            id: '13',
          })
        );
      });
    });

    it('should throw an error if user id cannot be found', () => {
      service.getUser('unknown').subscribe({
        next: () => {
          fail('The user should not be returned for unknown id');
        },
        error: (e) => {
          expect(e?.message).toEqual('User not found: unknown');
        },
      });
    });
  });
});
