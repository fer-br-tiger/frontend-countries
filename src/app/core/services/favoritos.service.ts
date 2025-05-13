import { computed, Injectable, signal } from '@angular/core';
import { Country } from '../../shared/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritosSignal = signal<Country[]>([]);

  favoritos = computed(() => this.favoritosSignal());

  constructor() { }

  isFavorito = (code: string) =>
    computed(() => this.favoritosSignal().some(c => c.cca3 === code));

  toggleFavorito(country: Country): void {
    const lista = this.favoritosSignal();
    const existe = lista.find(c => c.cca3 === country.cca3);
    this.favoritosSignal.set(
      existe ? lista.filter(c => c.cca3 !== country.cca3) : [...lista, country]
    );
  }

}
