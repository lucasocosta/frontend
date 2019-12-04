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