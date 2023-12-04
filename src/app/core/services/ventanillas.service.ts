import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ventanilla } from '@core/interfaces/ventanilla';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentanillasService {
  URL!:string;
  constructor(private http : HttpClient) {
    this.URL = environment.apiUri;
  }
  getVentanillas():Observable<Ventanilla[]>{
    let uri = 'listar-ventanillas';
    return this.http.get<Ventanilla[]>(`${this.URL}${uri}`);
  }

  findVentanilla(ventanilla:Ventanilla):Observable<Ventanilla>{
    let uri = 'seleccion-ventanilla/';
    return this.http.get<Ventanilla>(`${this.URL}${uri}${ventanilla.id}`);
  }
}
