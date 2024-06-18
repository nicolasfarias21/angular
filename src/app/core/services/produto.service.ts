import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient : HttpClient
  ) { }

  listar () : Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/api/v1/products`)
  }
}