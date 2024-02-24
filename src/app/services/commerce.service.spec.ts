import { TestBed } from '@angular/core/testing';
import { CommerceService } from './commerce.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommerceService', () => {
  let service: CommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommerceService],
    });
    service = TestBed.inject(CommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
