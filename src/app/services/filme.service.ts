import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from '../models/modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private host = "localhost";
  //private host = "192.168.11.6"

  constructor(private http: HttpClient) { }

  
  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>("http://"+this.host+":3000/filmes/");
  }

  adicionar(filme: Filme): Observable<any>
  {
    return this.http.post("http://"+this.host+":3000/filme", filme);
  }

  getFilme(idfilme: number): Observable<Filme>
  {
    return this.http.get<Filme>("http://"+this.host+":3000/filme/" + idfilme);
  }

  remover(idfilme: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/filme/" + idfilme);
  }

  edit(filme: Filme): Observable<any>
  {
    return this.http.put("http://"+this.host+":3000/filme/" + filme.idfilme,filme);
  }
}
