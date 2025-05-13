import { TestBed } from '@angular/core/testing';

import { FavoritosService } from './favoritos.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../interceptors/error.interceptor';

describe('FavoritosService', () => {
  let service: FavoritosService;
  const mockCountry = { name: { common: 'Chile' }, cca3: 'CHL', region: 'Americas', subregion: 'South America', population: 19116209, flags: { svg: '' } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([errorInterceptor]))]
    });
    service = TestBed.inject(FavoritosService);
  });

  it('debería iniciar sin favoritos', () => {
    expect(service.favoritos()).toEqual([]);
  });

  it('debería agregar un país a favoritos', () => {
    service.toggleFavorito(mockCountry);
    expect(service.favoritos()).toContain(mockCountry);
  });

  it('debería eliminar un país de favoritos', () => {
    service.toggleFavorito(mockCountry);
    service.toggleFavorito(mockCountry);
    expect(service.favoritos()).not.toContain(mockCountry);
  });

  it('debería indicar si un país es favorito', () => {
    service.toggleFavorito(mockCountry);
    expect(service.isFavorito('CHL')()).toBeTrue();
  });
});

