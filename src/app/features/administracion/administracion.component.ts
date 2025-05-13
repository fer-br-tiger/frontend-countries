import { Component } from '@angular/core';
import { FavoritosService } from '../../core/services/favoritos.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.scss'
})
export class AdministracionComponent {

  constructor(public favService: FavoritosService) {}
}
