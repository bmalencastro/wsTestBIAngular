import { TestBed } from '@angular/core/testing';

import { WsTestBiService } from './ws-test-bi.service';

describe('WsTestBiService', () => {
  let service: WsTestBiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsTestBiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
