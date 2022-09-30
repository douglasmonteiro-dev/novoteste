import { Model } from 'mongoose';
import { CreateAgendamentoDto } from './create-agendamento.dto';
import { Agendamento, AgendamentoDocument } from './agendamento.schema';
export declare class AgendamentosService {
    private agendamentoModel;
    constructor(agendamentoModel: Model<AgendamentoDocument>);
    findAll(): Promise<Agendamento[]>;
    findByUser(userId: string): Promise<Agendamento[] | undefined>;
    findbByAgendaId(agendaId: string): Promise<Agendamento[] | undefined>;
    findbyService(servico: string): Promise<Agendamento[] | undefined>;
    findByInicio(inicio: Date): Promise<Agendamento[] | undefined>;
    updateAgendamento(agendamento: Agendamento): Promise<import("mongodb").UpdateResult>;
    deleteAgendamento(agendamento: Agendamento): Promise<import("mongodb").DeleteResult>;
    create(createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento>;
}
