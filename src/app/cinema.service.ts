import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cinema, Endereco } from './cinema/cinema.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }



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
