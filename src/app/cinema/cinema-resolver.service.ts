import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Cinema, Endereco} from 'src/app/cinema/cinema.component';
import {Observable} from 'rxjs';
import { CinemaService } from '../cinema.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaResolverService implements Resolve<Cinema[]> {


  constructor(private service: CinemaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cinema[]> | Promise<Cinema[]> | Cinema[]
  {
    //console.log("Chegou");
    return this.service.getCinemas();
  }

}
