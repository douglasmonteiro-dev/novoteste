/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type AgendamentoDocument = Agendamento & Document;
export declare class Agendamento {
    userId: string;
    agendaId: string;
    servicoId: string;
    data: Date;
    hora: string;
    minutos: string;
    servico: string;
    nome: string;
    profissional: string;
    tempoAtendimento: string;
    pagamento: boolean;
    confirmado: boolean;
}
export declare const AgendamentoSchema: import("mongoose").Schema<Document<Agendamento, any, any>, import("mongoose").Model<Document<Agendamento, any, any>, any, any, any>, {}, {}>;
