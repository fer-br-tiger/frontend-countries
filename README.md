# Frontend Countries App

App hecha con Angular 17 para mostrar países desde la API pública REST Countries.

## Comandos

- `npm install`
- `ng serve`
- `ng test`
- `ng lint`
- `ng build --configuration=production`

## Arquitectura

- `CoreModule`: Servicios singleton e interceptores
- `SharedModule`: Pipes, directivas y componentes reutilizables
- `ListadoModule`: Módulo de listado y detalle de países
- `AdministracionModule`: Módulo de gestión (ej. favoritos)

## Decisiones técnicas

- Se usa ChangeDetectionStrategy.OnPush donde es posible.
- Se eligió Signals para manejo de estado por ser livianos, reactivos y adecuados para apps de tamaño medio.
