import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor(private http: HttpClient) { }
  get(tipo: any): Observable<any> {
    const tipoJson = JSON.stringify(tipo);
    return this.http.get<any>('http://localhost:8080/arquivo/get', tipo);
}
}
