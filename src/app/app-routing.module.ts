import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listado', loadChildren: () => import('./features/listado/listado.module').then(m => m.ListadoModule) },
  { path: 'administracion', loadChildren: () => import('./features/administracion/administracion.module').then(m => m.AdministracionModule) },
  { path: '**', redirectTo: 'listado'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
