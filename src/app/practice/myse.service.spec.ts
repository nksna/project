import { TestBed } from '@angular/core/testing';

import { MyseService } from './myse.service';

describe('MyseService', () => {
  let service: MyseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
