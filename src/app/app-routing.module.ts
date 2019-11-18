import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CinemaResolverService } from './cinema/cinema-resolver.service';
import { HomeComponent } from './home/home.component';
import { UsuarioResolverService } from './usuario/usuario-resolver.service';
import { SalaComponent } from './sala/sala.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cinemas', component: CinemaComponent, resolve: {cinemas: CinemaResolverService} },
  { path: 'usuarios', component: UsuarioComponent, resolve: {usuarios: UsuarioResolverService}},
  { path: 'salas', component: SalaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
