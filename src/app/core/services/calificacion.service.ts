import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calificacion } from '@core/interfaces/calificacion';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  URL!:string;

  constructor(
    private http:HttpClient
  ) {
    this.URL = environment.apiUri;
  }

  sendQualifier(calificacion:Calificacion):Observable<Calificacion>{
    let uri = 'calificar';
    return this.http.post<Calificacion>(`${this.URL}${uri}`,calificacion);
  }
}
