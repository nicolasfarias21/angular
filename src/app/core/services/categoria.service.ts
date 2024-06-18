import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient : HttpClient
  ) { }

  listar () : Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/v1/categories`)
  }
}
