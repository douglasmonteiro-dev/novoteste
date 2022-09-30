export class CreateServicoDto {
    name: string;
    descricao: string;
    instrucao: string;
    tempoAtendimento: string;
    endereco: string;
    valor: string
    formaPagamento: string

    constructor(name: string, descricao: number, valor: string){
        this.name = name.length > 3 ? name : '0';
    }
    
  }
  

  