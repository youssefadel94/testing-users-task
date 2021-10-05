import { TestBed } from '@angular/core/testing';

import { TestUsersAndQuestionsService } from './test-users-and-questions.service';

describe('TestUsersAndQuestionsService', () => {
  let service: TestUsersAndQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUsersAndQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
