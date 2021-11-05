import { TestBed } from '@angular/core/testing';

import { DummyServicesService } from './dummy-services.service';

describe('DummyServicesService', () => {
  let service: DummyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
