import { Component, OnInit } from '@angular/core';
import { SalaService } from '../sala.service';
import { ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {


  private options: number;
  private cinemas = new Array<Cinema>();
  private salas = new Array<Sala>();

  private basic: boolean;
  private opcaoModal: number;

  private novoModal: Sala;

  constructor(
    private service: SalaService,
    private serviceRota: ActivatedRoute) { }

  ngOnInit() {
    this.cinemas=[];
    this.salas=[];
    this.serviceRota.data.subscribe((data: {cinemas: Cinema[]}) => {
      this.cinemas = data.cinemas;
    });

    this.novoModal = new Sala();
    this.opcaoModal=-1;
  }

  selecionar()
  {
    this.getSalas(this.options);
  }

  

  getSalas(idcinema: number)
  {
    console.log(idcinema);
    this.service.getSalas(idcinema).subscribe(salas => this.salas=salas);
  }

  
  adicionarNovo()
  {
    this.novoModal= new Sala();
    this.novoModal.idcinema=this.options;
    this.basic = true;
    this.opcaoModal=1;
  }

  
  editar(sala: Sala)
  {
    this.opcaoModal=0;
    this.service.getSala(sala.idsala).subscribe(res =>
    {
      this.novoModal = sala;
      this.basic = true;
    });

  }

  remover(sala: Sala)
  {
    this.service.remover(sala.idsala).subscribe(res =>
    {
      let salaIdx = this.salas.indexOf(sala);
      this.salas.splice(salaIdx,1);
    });
  }

  salvar() {
    if(this.opcaoModal==1)
    {
      this.service.adicionar(this.novoModal).subscribe(res => {
        this.novoModal.idsala = res.insertId;
        this.service.adicionarCadeiras(this.novoModal);
        this.salas.push(this.novoModal);
        }); 
      this.basic = false;
  
    }
    else if(this.opcaoModal==0)
    {
       this.service.edit(this.novoModal).subscribe(res => {
        let salaIdx = this.salas.findIndex(c => c.idsala == this.novoModal.idsala)
        this.salas[salaIdx] = this.novoModal;
        //console.log(this.cinemas[salaIdx].endereco);
       });
       
       this.basic = false;
    }
    
  }

  cancelar() {
    this.novoModal = new Sala();
    this.basic = false;
    
  }
}

export class Sala {
  idsala: number;
  nome: string;
  idcinema: number;
  fileiras: number;
  poltronas: number;

  constructor() {
    this.nome = '';
    this.idcinema = 0;
    this.fileiras = 0;
    this.poltronas = 0;
  }
}
export class Cinema {
  idcinemas: number;
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

export class Cadeira {
  idcadeira: number;
  fileira: string;
  cadeira: number;
  idsala: number;

  constructor() {
    this.fileira = '';
    this.cadeira = 0;
    this.idsala = 0;
  }
}
