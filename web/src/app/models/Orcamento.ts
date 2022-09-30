import { Agendamento } from '../models/Agendamento';

export class Orcamento {
      _id: string;
      userId: string;
      servicoId: string;
      inicio: Date;
      fim: Date;
      horaInicio: string;
      horaFim: string;
      endereco: string;
      lat: string;
      lng: string;
      tempoAtendimento: number;
      valor: string;
      formaPagamento: {
        dinheiro: Boolean;
        pagSeguro: Boolean;
      };
      agendamentos: Agendamento[];
      data: Date;
      minutos: number;
      hora: number;
  }
