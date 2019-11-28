import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CinemaResolverService } from './cinema/cinema-resolver.service';
import { HomeComponent } from './home/home.component';
import { UsuarioResolverService } from './usuario/usuario-resolver.service';
import { SalaComponent } from './sala/sala.component';
import { FilmeComponent } from './filme/filme.component';
import { SessaoComponent } from './sessao/sessao.component';
import { IngressoComponent } from './ingresso/ingresso.component';


const routes: Routes = [
  { path: 'admin', component: HomeComponent },
  { path: 'admin/home', component: HomeComponent },
  { path: 'admin/cinemas', component: CinemaComponent, resolve: {cinemas: CinemaResolverService} },
  { path: 'admin/usuarios', component: UsuarioComponent, resolve: {usuarios: UsuarioResolverService}},
  { path: 'admin/salas', component: SalaComponent, resolve: {cinemas: CinemaResolverService} },
  { path: 'admin/filmes', component: FilmeComponent },
  { path: 'admin/sessoes', component: SessaoComponent, resolve: {cinemas: CinemaResolverService} },
  { path: 'admin/ingressos', component: IngressoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
