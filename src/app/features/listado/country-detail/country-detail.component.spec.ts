import { TestBed } from '@angular/core/testing';

import { CountryService } from '../../../core/services/country.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../../../core/interceptors/error.interceptor';

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [CountryService, provideHttpClient(withInterceptors([errorInterceptor])), provideHttpClientTesting()]
    });
    service = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('debería obtener todos los países', () => {
    const mockData = [{ name: { common: 'Argentina' }, cca3: 'ARG', region: 'Americas', flags: { svg: '' } }];
    service.getAll().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].cca3).toBe('ARG');
    });

    const req = httpMock.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});

