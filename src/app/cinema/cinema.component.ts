import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  private basic: boolean;
  private opcaoModal: number;

  private novoModal: Cinema;
  private cinemas = new Array<Cinema>();
  //private cinemas: Cinema[];

  constructor(private service: CinemaService) { }

  ngOnInit() {
    this.novoModal = new Cinema();
    this.service.getCinemas().subscribe(cinemas => this.cinemas = cinemas);
    this.opcaoModal=1;
  }

  adicionarNovo()
  {
    this.service.adicionar(this.novoModal).subscribe(res => {
      this.novoModal.idcinemas = res.insertId;
      this.cinemas.push(this.novoModal);
    });    
    this.basic = false;
  }

  editar()
  {

  }

  salvar() {
    if(this.opcaoModal==1)
    {
      this.adicionarNovo()
    }
    else if(this.opcaoModal==0)
    {
      this.editar()
    }
    
  }

  cancelar() {
    this.novoModal = new Cinema();
    this.basic = false;
  }
}

export class Cinema {
  idcinemas: number
  nome: string;
  nome_fantasia: string;
  cnpj: string;
  idendereco: number;
  avaliacao: number;
  email: string;

  constructor() {
    this.nome = '';
    this.nome_fantasia = '';
    this.cnpj = '';
    this.avaliacao = 0;
    this.email = '';
    this.idendereco = null;
  }
}
