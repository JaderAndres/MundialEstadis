import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistencia } from 'src/app/models/estadisticas/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  myAppUrl = 'https://localhost:5001';
  myApiUrl = '/api/asistencias';

  constructor(private httpclient: HttpClient) { }

  getAsistencias():Observable<Asistencia[]>{
    return this.httpclient.get<Asistencia[]>(this.myAppUrl + this.myApiUrl);
  }
}
