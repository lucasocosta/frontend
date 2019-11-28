import { Component, OnInit } from '@angular/core';
import { SalaService } from '../sala.service';
import { FilmeService } from '../filme.service';
import { SessaoService } from '../sessao.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.css']
})
export class SessaoComponent implements OnInit {


  private options: number;
  private cinemas = new Array<Cinema>();
  private salas = new Array<Sala>();
  private sessoes = new Array<Sessao>();

  private basic: boolean;
  private opcaoModal: number;

  private novoModal: Sessao;

  constructor(
    private serviceSessao: SessaoService,
    private serviceFilme: FilmeService,
    private serviceSala: SalaService,
    private serviceRota: ActivatedRoute) { }

  ngOnInit() {
    this.cinemas=[];
    this.salas=[];
    this.sessoes=[];
    this.serviceRota.data.subscribe((data: {cinemas: Cinema[]}) => {
      this.cinemas = data.cinemas;
    });

    this.novoModal = new Sessao();
    this.opcaoModal=-1;
  }

  selecionarSala()
  {
    this.serviceSala.getSalas(this.options).subscribe(salas => this.salas=salas);
    this.serviceSessao.getSessoes(this.options).subscribe(sessoes => this.sessoes=sessoes);
  }

  
  adicionarNovo()
  {
    this.novoModal= new Sessao();
    //this.novoModal.idsala=this.options;
    this.basic = true;
    this.opcaoModal=1;
  }

  
  editar(sessao: Sessao)
  {
    this.opcaoModal=0;
    this.serviceSessao.getSessao(sessao.idsessao).subscribe(res =>
    {
      this.novoModal = sessao;
      this.basic = true;
    });

  }

  remover(sessao: Sessao)
  {
    this.serviceSessao.remover(sessao.idsessao).subscribe(res =>
    {
      let sessaoIdx = this.sessoes.indexOf(sessao);
      this.sessoes.splice(sessaoIdx,1);
    });
  }

  salvar() {
    if(this.opcaoModal==1)
    {
      console.log(this.serviceSessao);
      this.serviceSessao.adicionarSessao(this.novoModal).subscribe(res => {
        this.novoModal.idsessao = res.insertId;
        this.sessoes.push(this.novoModal);
        }); 
      this.basic = false;
  
    }
    else if(this.opcaoModal==0)
    {
       this.serviceSessao.edit(this.novoModal).subscribe(res => {
        let sessaoIdx = this.sessoes.findIndex(c => c.idsessao == this.novoModal.idsessao)
        this.sessoes[sessaoIdx] = this.novoModal;
        //console.log(this.cinemas[salaIdx].endereco);
       });
       
       this.basic = false;
    }
    
  }

  cancelar() {
    this.novoModal = new Sessao();
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

export class Sessao {
  idsessao: number;
  idfilme: number;
  idsala: number;
  preco: number;
  horainicio: Date;
  horafim: Date;

  constructor() {
    this.idfilme = 0;
    this.idsala = 0;
    this.preco = 0;
    this.horainicio = new Date();
    this.horafim = new Date();
  }
}

export class Filme {
  idfilme: number;
  nome: string;
  sinopse: string;
  cartaz: string;
  idusuario: number;
  atores: string;

  constructor() {
    this.nome = '';
    this.sinopse = '';
    this.cartaz = '';
    this.idusuario = 0;
    this.atores='';
  }
}
