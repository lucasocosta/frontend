import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cadeira, Sala } from '../models/modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private host = "localhost";
  //private host = "192.168.11.6"

  constructor(private http: HttpClient) { }

  
  getSalas(idcinema: number): Observable<Sala[]> {
    return this.http.get<Sala[]>("http://"+this.host+":3000/salas/" + idcinema, this.header());
  }

  adicionar(sala: Sala): Observable<any>
  {
    return this.http.post("http://"+this.host+":3000/sala", sala, this.header());
  }

  adicionarCadeiras(sala: Sala)
  {
    for(let i=0;i<sala.fileiras;i++)
    {
      for(let j=0;j<sala.poltronas;j++)
      {
        let cadeira= new Cadeira();
        cadeira.idsala=sala.idsala;
        cadeira.fileira= ""+String.fromCharCode(97 + i);
        cadeira.cadeira=j;
        this.http.post("http://"+this.host+":3000/cadeira", cadeira, this.header()).subscribe();
      }
    }
  }

  getSala(idsala: number): Observable<Sala>
  {
    return this.http.get<Sala>("http://"+this.host+":3000/sala/" + idsala, this.header());
  }

  remover(idsala: number): Observable<any>
  {
    this.http.delete("http://"+this.host+":3000/cadeiras/" + idsala, this.header()).subscribe(); //remove todas as cadeiras da sala
    return this.http.delete("http://"+this.host+":3000/sala/" + idsala, this.header());
  }

  edit(sala: Sala): Observable<any>
  {
    return this.http.put("http://"+this.host+":3000/sala/" + sala.idsala,sala, this.header());
  }
  header() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN')
      })
    };
  }
}
