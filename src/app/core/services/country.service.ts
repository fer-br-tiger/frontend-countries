import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Country } from '../../shared/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = environment.endpoint;
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}/all`);
  }

  searchByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}/name/${name}`);
  }

  getByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}/alpha/${code}`);
  }
}
