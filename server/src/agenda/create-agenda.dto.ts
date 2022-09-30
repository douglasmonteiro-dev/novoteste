export class CreateAgendaDto {
    userId: string;
    servico: string;
    inicio: Date;
    fim: Date;
    horaInicio: string;
    horaFim: string
    tempoAtendimento: number
    endereco: string
    lat: string
    lng: string
    valor: string
    formaPagamento: object
    agendamentos: object
    diasDaSemana: object;

    constructor(userId: string, servico: string, inicio: Date, fim: Date){
       
    }
    
  }
  

  