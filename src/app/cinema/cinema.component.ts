import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { ActivatedRoute} from '@angular/router';

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

  constructor(
    private service: CinemaService,
    private serviceRota: ActivatedRoute) { }

  ngOnInit() {
    
    this.serviceRota.data.subscribe((data: {cinemas: Cinema[]}) => {
      this.cinemas = data.cinemas;
      this.recuperaEndereco();
    });
    //this.service.getCinemas().subscribe(cinemas => this.cinemas = cinemas);
    this.novoModal = new Cinema();
    this.opcaoModal=-1;
    //console.log(this.cinemas)
    //this.cinemas.forEach(this.recuperaEndereco);
    //console.log(this.cinemas);
  }

  pesquisarCep(cep: string)
  {
    console.log(cep);
    this.service.getEnderecoCep(cep).subscribe(res => {
      this.novoModal.endereco.logradouro=res.logradouro;
      this.novoModal.endereco.cep=res.cep;
      this.novoModal.endereco.uf=res.uf;
      this.novoModal.endereco.bairro=res.bairro;
      this.novoModal.endereco.cidade=res.cidade;
    });
  }

  recuperaEndereco()
  {
    for(let i=0;i<this.cinemas.length;i++)
      {
        this.service.getEndereco(this.cinemas[i].idendereco).subscribe(res =>
          {
            this.cinemas[i].endereco=res;
            //console.log(this.cinemas[i].endereco);
          });
      }

    
  }

  adicionarNovo()
  {
    //this.recuperaEndereco(this.cinemas[0]);
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
      this.service.removerEndereco(this.cinemas[cinemaIdx].idendereco).subscribe();
      this.cinemas.splice(cinemaIdx,1);
    });
  }

  salvar() {
    if(this.opcaoModal==1)
    {
      this.service.adicionarEndereco(this.novoModal.endereco).subscribe(res => {
        this.novoModal.endereco.idendereco = res.insertId;
        this.novoModal.idendereco=res.insertId;

        this.service.adicionar(this.novoModal).subscribe(res => {
          this.novoModal.idcinemas = res.insertId;
          this.cinemas.push(this.novoModal);
        });    

      });

      this.basic = false;
  
    }
    else if(this.opcaoModal==0)
    {
       this.service.edit(this.novoModal).subscribe(res => {
        let cinemaIdx = this.cinemas.findIndex(c => c.idcinemas == this.novoModal.idcinemas)
        this.cinemas[cinemaIdx] = this.novoModal;
        //console.log(this.cinemas[cinemaIdx].endereco);
        
        this.service.editEndereco(this.cinemas[cinemaIdx].endereco).subscribe();
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
  idcinemas: number;
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
