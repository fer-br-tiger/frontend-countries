import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Country } from '../../../shared/models/country.model';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../core/services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailComponent implements OnInit {

  country$!: Observable<Country[] | null>;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.country$ = this.route.paramMap.pipe(
      map(params => params.get('code')),
      switchMap(code =>
        code ? this.countryService.getByCode(code).pipe(
          catchError(err => {
            console.error('Error cargando país:', err);
            return of(null);
          })
        ) : of(null)
      )
    );
  }

}
