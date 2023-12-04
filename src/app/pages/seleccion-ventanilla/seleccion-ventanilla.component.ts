import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ventanilla } from '@core/interfaces/ventanilla';
import { SwalService } from '@core/services/swal.service';
import { VentanillasService } from '@core/services/ventanillas.service';

@Component({
  selector: 'app-seleccion-ventanilla',
  templateUrl: './seleccion-ventanilla.component.html',
  styleUrls: ['./seleccion-ventanilla.component.css']
})
export class SeleccionVentanillaComponent implements OnInit{
  constructor(
    private _ventanillas:VentanillasService,
    private router: Router,
    private _swal: SwalService
  ){}

  ngOnInit(): void {
    this.obtenerVentanillas();
  }

  ventanillas:Ventanilla[]=[];
  ventanilla:Ventanilla = {
    id:'',
    numero:'',
    estado: false,
  }

  obtenerVentanillas():void{
    this._ventanillas.getVentanillas().subscribe({
      next:(resp:any)=>{
        this.ventanillas = resp.ventanillas
      },
      error:(err)=>{console.log(err);}
    });
  }

  seleccionarVentanilla():void{
    if(this.ventanilla.id != ""){
      this._ventanillas.findVentanilla(this.ventanilla).subscribe({
        next:(resp:any)=>{
          this.ventanilla = resp.resp
          this.router.navigate([`calificar-ventanilla/${this.ventanilla.id}`])
        },
        error:(err)=>{console.log(err);}
      });
    }else{
      this._swal.info('Selecciona una ventanilla');
    }
  }
}
