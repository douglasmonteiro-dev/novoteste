import { Model } from 'mongoose';
import { CreateTicketDto } from './create-ticket.dto';
import { Ticket, TicketDocument } from './tickets.schema';
export declare class TicketsService {
    private ticketModel;
    constructor(ticketModel: Model<TicketDocument>);
    findAll(): Promise<Ticket[]>;
    findOne(cpf: string): Promise<Ticket | undefined>;
    findByEmail(email: string): Promise<Ticket | undefined>;
    updatePass(ticket: Ticket): Promise<import("mongodb").UpdateResult>;
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
}
