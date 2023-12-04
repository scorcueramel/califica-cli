import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SeleccionVentanillaComponent } from './seleccion-ventanilla/seleccion-ventanilla.component';
import { CalificacionVentanillaComponent } from './calificacion-ventanilla/calificacion-ventanilla.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SeleccionVentanillaComponent,
    CalificacionVentanillaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule,
    NgbRatingModule
  ],
  exports:[
    SeleccionVentanillaComponent,
    CalificacionVentanillaComponent
  ]
})
export class PagesModule { }
