import { Model } from 'mongoose';
import { CreateAgendaDto } from './create-agenda.dto';
import { Agenda, AgendaDocument } from './agenda.schema';
export declare class AgendasService {
    private agendaModel;
    constructor(agendaModel: Model<AgendaDocument>);
    findAll(): Promise<Agenda[]>;
    findbyUser(userId: string): Promise<Agenda[] | undefined>;
    findbyService(servico: string): Promise<Agenda[] | undefined>;
    findByInicio(inicio: Date): Promise<Agenda[] | undefined>;
    find(params: any): Promise<Agenda[] | undefined>;
    updateAgenda(agenda: Agenda): Promise<import("mongodb").UpdateResult>;
    deleteAgenda(agenda: Agenda): Promise<import("mongodb").DeleteResult>;
    create(createAgendaDto: CreateAgendaDto): Promise<Agenda>;
}
