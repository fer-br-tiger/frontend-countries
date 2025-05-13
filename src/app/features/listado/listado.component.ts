import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CountryService } from '../../core/services/country.service';
import { combineLatest, debounceTime, map, Observable, shareReplay, startWith } from 'rxjs';
import { Country } from '../../shared/models/country.model';
import { FavoritosService } from '../../core/services/favoritos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListadoComponent implements OnInit {

  form = this.formBuilder.group({
    search: '',
    region: ''
  });

  allCountries$!: Observable<Country[]>;

  filteredCountries$!: Observable<Country[]>;

  constructor(private formBuilder: FormBuilder, private countryService: CountryService, public favService: FavoritosService) { }

  ngOnInit(): void {
    this.allCountries$ = this.countryService.getAll().pipe(shareReplay(1));

    this.filteredCountries$ = combineLatest([
    this.allCountries$,
    this.form.valueChanges.pipe(
      startWith(this.form.value),
      debounceTime(300),
      map(val => ({
        search: val.search?.toLowerCase() || '',
        region: val.region
      }))
    )
  ]).pipe(
    map(([countries, filters]) =>
      countries.filter(c =>
        (!filters.search || c.name.common.toLowerCase().includes(filters.search)) &&
        (!filters.region || c.region === filters.region)
      )
    )
  );
  }

}
