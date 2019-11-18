import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Usuario, Endereco} from 'src/app/usuario/usuario.component';
import {Observable} from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolverService implements Resolve<Usuario[]> {


  constructor(private service: UsuarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario[]> | Promise<Usuario[]> | Usuario[]
  {
    console.log("Chegou");
    return this.service.getUsuarios();
  }

}
