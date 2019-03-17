import { TestBed } from '@angular/core/testing';

import { CustomerapplicationService } from './customerapplication.service';

describe('CustomerapplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerapplicationService = TestBed.get(CustomerapplicationService);
    expect(service).toBeTruthy();
  });
});
