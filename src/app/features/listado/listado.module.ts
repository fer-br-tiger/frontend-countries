import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './listado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { RouterModule } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../../core/interceptors/error.interceptor';


@NgModule({
  declarations: [
    ListadoComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule,
    ReactiveFormsModule,
    ScrollingModule,
    RouterModule
  ],
  providers: [
    provideHttpClient(withInterceptors([errorInterceptor]))
  ]
})
export class ListadoModule { }
