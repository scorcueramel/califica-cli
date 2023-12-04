import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTER, EMPTY_PATH } from '@core/constants/router';
import { SeleccionVentanillaComponent } from './seleccion-ventanilla/seleccion-ventanilla.component';
import { CalificacionVentanillaComponent } from './calificacion-ventanilla/calificacion-ventanilla.component';

const routes: Routes = [
  {path:EMPTY_PATH, component:SeleccionVentanillaComponent},
  {path:APP_ROUTER.APP_SELECCIONA_VENTANILLA, component:SeleccionVentanillaComponent},
  {path:`${APP_ROUTER.APP_CALIFICA_VENTANILLA}/:id`, component:CalificacionVentanillaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
