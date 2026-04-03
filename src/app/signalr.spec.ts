import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Signalr } from './signalr';

describe('Signalr', () => {
  let service: Signalr;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(Signalr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
