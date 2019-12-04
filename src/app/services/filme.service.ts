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
    return this.http.get<Filme[]>("http://"+this.host+":3000/filmes/", this.header());
  }

  adicionar(filme: Filme): Observable<any>
  {
    return this.http.post("http://"+this.host+":3000/filme", filme, this.header());
  }

  getFilme(idfilme: number): Observable<Filme>
  {
    return this.http.get<Filme>("http://"+this.host+":3000/filme/" + idfilme, this.header());
  }

  remover(idfilme: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/filme/" + idfilme, this.header());
  }

  edit(filme: Filme): Observable<any>
  {
    return this.http.put("http://"+this.host+":3000/filme/" + filme.idfilme,filme, this.header());
  }
  header() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN')
      })
    };
  }
}
