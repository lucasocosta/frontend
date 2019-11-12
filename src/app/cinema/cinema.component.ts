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
    this.opcaoModal=-1;
  }

  adicionarNovo()
  {
    this.novoModal= new Cinema();
    this.basic = true;
    this.opcaoModal=1;
  }

  
  editar(cinema: Cinema)
  {
    this.opcaoModal=0;
    this.service.getCinema(cinema.idcinemas).subscribe(res =>
    {
      this.novoModal = cinema;
      this.basic = true;
    });

  }

  remover(cinema: Cinema)
  {
    this.service.remover(cinema.idcinemas).subscribe(res =>
    {
      let cinemaIdx = this.cinemas.indexOf(cinema);
      this.cinemas.splice(cinemaIdx,1);
    });
  }

  salvar() {
    if(this.opcaoModal==1)
    {
      this.service.adicionar(this.novoModal).subscribe(res => {
        this.novoModal.idcinemas = res.insertId;
        this.cinemas.push(this.novoModal);
      });    
      this.basic = false;
  
    }
    else if(this.opcaoModal==0)
    {
       this.service.edit(this.novoModal).subscribe(res => {
        let cinemaIdx = this.cinemas.findIndex(c => c.idcinemas == this.novoModal.idcinemas)
        this.cinemas[cinemaIdx] = this.novoModal;
       });
       this.basic = false;
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
