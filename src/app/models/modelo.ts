
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