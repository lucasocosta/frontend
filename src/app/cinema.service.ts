import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cinema, Endereco } from './cinema/cinema.component';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getEnderecoCep(cep: string)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return this.http.get<any>("http://cep.la/" + cep, {headers});
  }

  getEndereco(idendereco: number): Observable<Endereco>
  {
    return this.http.get<Endereco>("http://localhost:3000/endereco/" + idendereco);
  }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>('http://localhost:3000/cinemas');
  }

  adicionarEndereco(endereco: Endereco): Observable<any>
  {
    var ans=this.http.post("http://localhost:3000/endereco", endereco);
    return ans;
  }


  adicionar(cinema: Cinema): Observable<any>
  {
    const endereco: Endereco = Object.assign(cinema.endereco)
    var ans=this.http.post("http://localhost:3000/cinema", cinema);
    cinema.endereco=endereco;
    return ans;
  }

  getCinema(idcinemas: number): Observable<Cinema>
  {
    return this.http.get<Cinema>("http://localhost:3000/cinema/" + idcinemas);
  }

  remover(idcinemas: number): Observable<any>
  {
    return this.http.delete("http://localhost:3000/cinema/" + idcinemas);
  }

  removerEndereco(idendereco: number): Observable<any>
  {
    return this.http.delete("http://localhost:3000/endereco/" + idendereco);
  }
  edit(cinema: Cinema): Observable<any>
  {
    const endereco: Endereco = Object.assign(cinema.endereco)
    var ans=this.http.put("http://localhost:3000/cinema/" + cinema.idcinemas,cinema);
    cinema.endereco=endereco;
    return ans;
  }

  editEndereco(endereco: Endereco): Observable<any>
  {
    return this.http.put("http://localhost:3000/endereco/" + endereco.idendereco,endereco);
  }
}
