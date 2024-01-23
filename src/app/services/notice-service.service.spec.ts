import { TestBed } from '@angular/core/testing';

import { NoticeServiceService } from './notice-service.service';

describe('NoticeServiceService', () => {
  let service: NoticeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
