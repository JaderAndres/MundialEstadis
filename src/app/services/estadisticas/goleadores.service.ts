import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goleadores } from 'src/app/models/estadisticas/Goleadores';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  myAppUrl = 'https://localhost:5001';
  myApiUrl = '/api/goleadores';

  constructor(private httpclient: HttpClient) { }

  getGoleadores():Observable<Goleadores[]>{
    return this.httpclient.get<Goleadores[]>(this.myAppUrl + this.myApiUrl);
  }
}
