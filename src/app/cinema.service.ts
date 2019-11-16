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
    var endereco = new Endereco();
    endereco = cinema.endereco;
    delete cinema.endereco;
    
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

  edit(cinema: Cinema): Observable<any>
  {
    return this.http.put("http://localhost:3000/cinema/" + cinema.idcinemas,cinema);
  }
}
