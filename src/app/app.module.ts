import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClarityModule } from '@clr/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CinemaComponent } from './admin/cinema/cinema.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { HomeComponent } from './admin/home/home.component';
import { SalaComponent } from './admin/sala/sala.component';
import { FilmeComponent } from './admin/filme/filme.component';
import { SessaoComponent } from './admin/sessao/sessao.component';
import { IngressoComponent } from './admin/ingresso/ingresso.component';
import { AuthComponent } from './admin/auth/auth.component';
import { AuthGuard } from './admin/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    UsuarioComponent,
    HomeComponent,
    SalaComponent,
    FilmeComponent,
    SessaoComponent,
    IngressoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
