import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CinemaResolverService } from './cinema/cinema-resolver.service';


const routes: Routes = [
  { path: '', component: CinemaComponent },
  { path: 'cinemas', component: CinemaComponent, resolve: {cinemas: CinemaResolverService} },
  { path: 'usuarios', component: UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
