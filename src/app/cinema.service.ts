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
}
