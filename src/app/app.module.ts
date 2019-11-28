import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClarityModule } from '@clr/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CinemaComponent } from './cinema/cinema.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { SalaComponent } from './sala/sala.component';
import { FilmeComponent } from './filme/filme.component';
import { SessaoComponent } from './sessao/sessao.component';
import { IngressoComponent } from './ingresso/ingresso.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    UsuarioComponent,
    HomeComponent,
    SalaComponent,
    FilmeComponent,
    SessaoComponent,
    IngressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
