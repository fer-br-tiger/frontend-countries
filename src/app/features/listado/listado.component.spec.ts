import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponent } from './listado.component';
import { CountryService } from '../../core/services/country.service';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../../core/interceptors/error.interceptor';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;
  let countryServiceSpy: jasmine.SpyObj<CountryService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CountryService', ['getAll']);
    TestBed.configureTestingModule({
      declarations: [ListadoComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: CountryService, useValue: spy }, provideHttpClient(withInterceptors([errorInterceptor]))]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    countryServiceSpy = TestBed.inject(CountryService) as jasmine.SpyObj<CountryService>;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario', () => {
    expect(component.form).toBeTruthy();
    expect(component.form.get('search')).toBeTruthy();
  });
});

