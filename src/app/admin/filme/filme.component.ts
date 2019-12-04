import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filme.service';
import { ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { Filme } from 'src/app/models/modelo';


@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {


  private options: number;
  private filmes = new Array<Filme>();

  private basic: boolean;
  private opcaoModal: number;

  private novoModal: Filme;

  constructor(
    private service: FilmeService,
    private serviceRota: ActivatedRoute) { }

  ngOnInit() {
    this.service.getFilmes().subscribe(filmes => this.filmes=filmes);
    this.novoModal = new Filme();
    this.opcaoModal=-1;
  }
  
  adicionarNovo()
  {
    this.novoModal= new Filme();
    this.basic = true;
    this.opcaoModal=1;
  }

  
  editar(filme: Filme)
  {
    this.opcaoModal=0;
    this.service.getFilme(filme.idfilme).subscribe(res =>
    {
      this.novoModal = filme;
      this.basic = true;
    });

  }

  remover(filme: Filme)
  {
    this.service.remover(filme.idfilme).subscribe(res =>
    {
      let filmeIdx = this.filmes.indexOf(filme);
      this.filmes.splice(filmeIdx,1);
    });
  }

  salvar() {
    if(this.opcaoModal==1)
    {
      this.service.adicionar(this.novoModal).subscribe(res => {
        this.novoModal.idfilme = res.insertId;
        this.filmes.push(this.novoModal);
        }); 
      this.basic = false;
  
    }
    else if(this.opcaoModal==0)
    {
       this.service.edit(this.novoModal).subscribe(res => {
        let filmeIdx = this.filmes.findIndex(c => c.idfilme == this.novoModal.idfilme)
        this.filmes[filmeIdx] = this.novoModal;
        //console.log(this.cinemas[filmeIdx].endereco);
       });
       
       this.basic = false;
    }
    
  }

  cancelar() {
    this.novoModal = new Filme();
    this.basic = false;
    
  }
}

