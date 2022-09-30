/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type TicketDocument = Ticket & Document;
export declare class Ticket {
    name: string;
    pass: number;
    cpf: string;
    phone: string;
    email: string;
}
export declare const TicketSchema: import("mongoose").Schema<Document<Ticket, any, any>, import("mongoose").Model<Document<Ticket, any, any>, any, any, any>, {}, {}>;
