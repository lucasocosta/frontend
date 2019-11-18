import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private basic: boolean;
  private opcaoModal: number;

  private novoModal: Usuario;
  private usuarios = new Array<Usuario>();
  //private cinemas: Cinema[];

  constructor(
    private service: UsuarioService,
    private serviceRota: ActivatedRoute) { }

  ngOnInit() {
    this.usuarios=[];
    this.serviceRota.data.subscribe((data: {usuarios: Usuario[]}) => {
      this.usuarios = data.usuarios;
      this.recuperaEndereco();
    });
    //this.service.getCinemas().subscribe(cinemas => this.cinemas = cinemas);
    this.novoModal = new Usuario();
    this.opcaoModal=-1;
    console.log(this.usuarios);
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
    for(let i=0;i<this.usuarios.length;i++)
      {
        this.service.getEndereco(this.usuarios[i].idendereco).subscribe(res =>
          {
            this.usuarios[i].endereco=res;
            //console.log(this.cinemas[i].endereco);
          });
      }

    
  }

  adicionarNovo()
  {
    //this.recuperaEndereco(this.cinemas[0]);
    this.novoModal= new Usuario();
    this.basic = true;
    this.opcaoModal=1;
  }

  
  editar(usuario: Usuario)
  {
    this.opcaoModal=0;
    this.service.getUsuario(usuario.idusuario).subscribe(res =>
    {
      usuario.data_nasc= new Date(usuario.data_nasc);
      this.novoModal = usuario;
      this.basic = true;
    });

  }

  remover(usuario: Usuario)
  {
    this.service.remover(usuario.idusuario).subscribe(res =>
    {
      let usuarioIdx = this.usuarios.indexOf(usuario);
      this.service.removerEndereco(this.usuarios[usuarioIdx].idendereco).subscribe();
      this.usuarios.splice(usuarioIdx,1);
    });
  }

  salvar() {
    if(this.opcaoModal==1)
    {
      this.service.adicionarEndereco(this.novoModal.endereco).subscribe(res => {
        this.novoModal.endereco.idendereco = res.insertId;
        this.novoModal.idendereco=res.insertId;

        this.service.adicionar(this.novoModal).subscribe(res => {
          this.novoModal.idusuario = res.insertId;
          this.usuarios.push(this.novoModal);
        });    

      });

      this.basic = false;
  
    }
    else if(this.opcaoModal==0)
    {
       this.service.edit(this.novoModal).subscribe(res => {
        let usuarioIdx = this.usuarios.findIndex(c => c.idusuario == this.novoModal.idusuario)
        this.usuarios[usuarioIdx] = this.novoModal;
        //console.log(this.cinemas[usuarioIdx].endereco);
        
        this.service.editEndereco(this.usuarios[usuarioIdx].endereco).subscribe();
       });
       
       
       
       this.basic = false;
    }
    
  }

  cancelar() {
    this.novoModal = new Usuario();
    this.basic = false;
    
  }
}

export class Usuario {
  idusuario: number;
  nome: string;
  senha: string;
  tipo: number;
  permissao: number;
  cpf: string;
  idendereco: number;
  data_nasc: Date;
  email: string;
  endereco: Endereco;

  constructor() {
    this.nome = '';
    this.senha = '';
    this.cpf = '';
    this.tipo = 0;
    this.permissao = 0;
    this.email = '';
    this.idendereco = null;
    this.data_nasc= new Date();
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
