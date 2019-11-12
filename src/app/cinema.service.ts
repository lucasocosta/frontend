import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cinema } from './cinema/cinema.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>('http://localhost:3000/cinemas');
  }


  adicionar(cinema: Cinema): Observable<any>
  {
    return this.http.post("http://localhost:3000/cinema", cinema);
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
