import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calificacion } from '@core/interfaces/calificacion';
import { CalificacionService } from '@core/services/calificacion.service';
import { SwalService } from '@core/services/swal.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calificacion-ventanilla',
  templateUrl: './calificacion-ventanilla.component.html',
  styleUrls: ['./calificacion-ventanilla.component.css']
})
export class CalificacionVentanillaComponent {
  id:number = this.activatedRouter.snapshot.params['id'];

  constructor(
    private activatedRouter: ActivatedRoute,
    config: NgbRatingConfig,
    private _swal : SwalService,
    private _calificacion : CalificacionService,
  ){
    config.max = 5;
		config.readonly = false;
  }

  rating = 0;

  calificacion:Calificacion = {
    ventanilla_id: this.id,
    puntuacion: this.rating,
  }

  calificar():void{
    this._swal.wait();
    this._calificacion.sendQualifier(this.calificacion).subscribe({
      next:(resp:any)=>{
        this._swal.success(resp.msg,()=>{});
        setTimeout(()=>{
          location.reload();
        },1000);
      },
      error:(err)=>{
        console.log(err);
        this._swal.close();
      }
    });
  }
}
