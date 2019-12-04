import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './admin/cinema/cinema.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { CinemaResolverService } from './admin/cinema/cinema-resolver.service';
import { HomeComponent } from './admin/home/home.component';
import { UsuarioResolverService } from './admin/usuario/usuario-resolver.service';
import { SalaComponent } from './admin/sala/sala.component';
import { FilmeComponent } from './admin/filme/filme.component';
import { SessaoComponent } from './admin/sessao/sessao.component';
import { IngressoComponent } from './admin/ingresso/ingresso.component';
import { AuthComponent } from './admin/auth/auth.component';
import { AuthGuard } from './admin/auth/auth.guard';


const routes: Routes = [
  { path: 'admin', component: AuthComponent },
  { path: 'admin/home', component: HomeComponent, canActivate: [AuthGuard],
  children: [
    { path: 'cinemas', component: CinemaComponent, resolve: {cinemas: CinemaResolverService} , canActivate: [AuthGuard]},
    { path: 'usuarios', component: UsuarioComponent, resolve: {usuarios: UsuarioResolverService}, canActivate: [AuthGuard]},
    { path: 'salas', component: SalaComponent, resolve: {cinemas: CinemaResolverService}, canActivate: [AuthGuard] },
    { path: 'filmes', component: FilmeComponent, canActivate: [AuthGuard] },
    { path: 'sessoes', component: SessaoComponent, resolve: {cinemas: CinemaResolverService}, canActivate: [AuthGuard] },
    { path: 'ingressos', component: IngressoComponent, canActivate: [AuthGuard] },
  ]},
  { path: 'auth', component: AuthComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
