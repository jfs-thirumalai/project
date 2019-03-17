import { TestBed } from '@angular/core/testing';

import { ViewAppService } from './view-app.service';

describe('ViewAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewAppService = TestBed.get(ViewAppService);
    expect(service).toBeTruthy();
  });
});
