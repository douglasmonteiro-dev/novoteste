/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type ServicoDocument = Servico & Document;
export declare class Servico {
    name: string;
    descricao: string;
    instrucao: string;
    endereco: string;
    valor: string;
    formaPagamento: string;
    tempoAtendimento: string;
}
export declare const ServicoSchema: import("mongoose").Schema<Document<Servico, any, any>, import("mongoose").Model<Document<Servico, any, any>, any, any, any>, {}, {}>;
