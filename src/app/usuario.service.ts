import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, Endereco } from './usuario/usuario.component';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //private host = "localhost";
  private host = "192.168.11.6"

  constructor(private http: HttpClient) { }

  getEnderecoCep(cep: string)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return this.http.get<any>("http://cep.la/" + cep, {headers});
  }

  getEndereco(idendereco: number): Observable<Endereco>
  {
    return this.http.get<Endereco>("http://"+this.host+":3000/endereco/" + idendereco);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://"+this.host+":3000/usuarios");
  }

  adicionarEndereco(endereco: Endereco): Observable<any>
  {
    var ans=this.http.post("http://"+this.host+":3000/endereco", endereco);
    return ans;
  }


  adicionar(usuario: Usuario): Observable<any>
  {
    const endereco: Endereco = Object.assign(usuario.endereco)
    
    var ans=this.http.post("http://"+this.host+":3000/usuario", usuario);
    usuario.endereco=endereco;
    return ans;
  }

  getUsuario(idusuario: number): Observable<Usuario>
  {
    return this.http.get<Usuario>("http://"+this.host+":3000/usuario/" + idusuario);
  }

  remover(idusuario: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/usuario/" + idusuario);
  }

  removerEndereco(idendereco: number): Observable<any>
  {
    return this.http.delete("http://"+this.host+":3000/endereco/" + idendereco);
  }
  edit(usuario: Usuario): Observable<any>
  {
    const endereco: Endereco = Object.assign(usuario.endereco)
    var ans=this.http.put("http://"+this.host+":3000/usuario/" + usuario.idusuario,usuario);
    usuario.endereco=endereco;
    return ans;
  }

  editEndereco(endereco: Endereco): Observable<any>
  {
    return this.http.put("http://"+this.host+":3000/endereco/" + endereco.idendereco,endereco);
  }
}
