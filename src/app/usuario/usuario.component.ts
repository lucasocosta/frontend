import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

export class Usuario {
  idusuario: number;
  nome: string;
  nome_fantasia: string;
  cnpj: string;
  idendereco: number;
  avaliacao: number;
  email: string;
  endereco: Endereco;

  constructor() {
    this.nome = '';
    this.nome_fantasia = '';
    this.cnpj = '';
    this.avaliacao = 0;
    this.email = '';
    this.idendereco = null;
    this.endereco = new Endereco();
  }
}
export class Endereco {
  idendereco: number;
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  logradouro: string;
  numero: number;
  complemento: string;

  constructor() {
    this.idendereco=null;
    this.cep = '';
    this.uf = '';
    this.cidade = '';
    this.bairro = '';
    this.logradouro = '';
    this.numero = null;
    this.complemento = '';
  }
}
