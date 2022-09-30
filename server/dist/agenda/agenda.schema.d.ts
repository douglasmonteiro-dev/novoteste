/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { Agendamento } from 'src/agendamento/agendamento.schema';
export declare type AgendaDocument = Agenda & Document;
export declare class Agenda {
    _id: string;
    userId: string;
    servico: string;
    inicio: Date;
    fim: Date;
    horaInicio: string;
    horaFim: string;
    tempoAtendimento: number;
    endereco: string;
    lat: string;
    lng: string;
    valor: string;
    formaPagamento: string;
    agendamentos: Agendamento[];
    diasDaSemana: string;
}
export declare const AgendaSchema: import("mongoose").Schema<Document<Agenda, any, any>, import("mongoose").Model<Document<Agenda, any, any>, any, any, any>, {}, {}>;
