import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sessao } from '../models/modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  private host = "localhost";
  //private host = "192.168.11.6"

  constructor(private http: HttpClient) { }

  
  getSessoes(idcinema: number): Observable<Sessao[]> {
    return this.http.get<Sessao[]>("http://"+this.host+":3000/sessoes/" + idcinema, this.header());
  }

  adicionarSessao(sessao: Sessao): Observable<any>
  {
    return this.http.post("http://"+this.host+":3000/sessao", sessao, this.header());
  }

  getSessao(idsessao: number): Observable<Sessao>
  {
    return this.http.get<Sessao>("http://"+this.host+":3000/sessao/" + idsessao, this.header());
  }

  remover(idsessao: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/sessao/" + idsessao, this.header());
  }

  edit(sessao: Sessao): Observable<any>
  {
    return this.http.put("http://"+this.host+":3000/sessao/" + sessao.idsessao,sessao, this.header());
  }
  header() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN')
      })
    };
  }
}
