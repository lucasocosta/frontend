import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cinema, Endereco } from '../models/modelo';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private host = "localhost";
  //private host = "192.168.11.6"

  constructor(private http: HttpClient) { }

  getEnderecoCep(cep: string)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return this.http.get<any>("http://cep.la/" + cep, {headers});
  }

  getEndereco(idendereco: number): Observable<Endereco>
  {
    return this.http.get<Endereco>("http://"+this.host+":3000/endereco/" + idendereco, this.header());
  }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>("http://"+this.host+":3000/cinemas", this.header());
  }

  adicionarEndereco(endereco: Endereco): Observable<any>
  {
    var ans=this.http.post("http://"+this.host+":3000/endereco", endereco, this.header());
    return ans;
  }


  adicionar(cinema: Cinema): Observable<any>
  {
    const endereco: Endereco = Object.assign(cinema.endereco)
    var ans=this.http.post("http://"+this.host+":3000/cinema", cinema, this.header());
    cinema.endereco=endereco;
    return ans;
  }

  getCinema(idcinemas: number): Observable<Cinema>
  {
    return this.http.get<Cinema>("http://"+this.host+":3000/cinema/" + idcinemas, this.header());
  }

  remover(idcinemas: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/cinema/" + idcinemas, this.header());
  }

  removerEndereco(idendereco: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/endereco/" + idendereco, this.header());
  }
  edit(cinema: Cinema): Observable<any>
  {
    const endereco: Endereco = Object.assign(cinema.endereco)
    var ans=this.http.put("http://"+this.host+":3000/cinema/" + cinema.idcinemas,cinema, this.header());
    cinema.endereco=endereco;
    return ans;
  }

  editEndereco(endereco: Endereco): Observable<any>
  {
    return this.http.put("http://"+this.host+":3000/endereco/" + endereco.idendereco,endereco, this.header());
  }
  header() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN')
      })
    };
  }
}
