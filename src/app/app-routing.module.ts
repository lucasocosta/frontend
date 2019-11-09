import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  { path: '', component: CinemaComponent },
  { path: 'cinemas', component: CinemaComponent },
  { path: 'usuarios', component: UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
