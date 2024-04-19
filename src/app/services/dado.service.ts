import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadoService {

  constructor(private http: HttpClient) { }
  criarDado(dado: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/dado/create', dado);
  }
}
