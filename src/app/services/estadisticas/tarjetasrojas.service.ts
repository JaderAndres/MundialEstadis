import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaRoja } from 'src/app/models/estadisticas/TarjetaRoja';

@Injectable({
  providedIn: 'root'
})
export class TarjetasrojasService {

  myAppUrl = 'https://localhost:5001';
  myApiUrl = '/api/tarjetasrojas';

  constructor(private httpclient: HttpClient) { }

  getTarjetasRojas():Observable<TarjetaRoja[]>{
    return this.httpclient.get<TarjetaRoja[]>(this.myAppUrl + this.myApiUrl);
  }
}
