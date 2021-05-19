import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private httpClient: HttpClient) { }

  consultarTodos(): Observable<HttpResponse<any>> {
    return this.httpClient.get('https://swapi.dev/api/planets', { observe: 'response' });
  }

  consultarPorId(id: string): Observable<HttpResponse<any>> {
    return this.httpClient.get(`https://swapi.dev/api/planets/${id}`, { observe: 'response' });
  }
}