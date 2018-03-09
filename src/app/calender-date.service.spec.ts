import { TestBed, inject } from '@angular/core/testing';

import { CalenderDateService } from './calender-date.service';

describe('CalenderDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalenderDateService]
    });
  });

  it('should be created', inject([CalenderDateService], (service: CalenderDateService) => {
    expect(service).toBeTruthy();
  }));
});
