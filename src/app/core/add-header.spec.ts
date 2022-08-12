import {TestBed} from '@angular/core/testing';
import {AddHeader} from './add-header';

describe('AddHeader', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddHeader
    ]
  }));
  it('should be created', () => {
    const interceptor: AddHeader = TestBed.inject(AddHeader);
    expect(interceptor).toBeTruthy();
  });
});