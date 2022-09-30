import { Model } from 'mongoose';
import { CreateOrcamentoDto } from './create-orcamento.dto';
import { Orcamento, OrcamentoDocument } from './orcamento.schema';
export declare class OrcamentosService {
    private orcamentoModel;
    constructor(orcamentoModel: Model<OrcamentoDocument>);
    findAll(): Promise<Orcamento[]>;
    findByUser(userId: string): Promise<Orcamento[] | undefined>;
    findbByAgendaId(agendaId: string): Promise<Orcamento[] | undefined>;
    findbyService(servico: string): Promise<Orcamento[] | undefined>;
    findByInicio(inicio: Date): Promise<Orcamento[] | undefined>;
    updateOrcamento(orcamento: Orcamento): Promise<import("mongodb").UpdateResult>;
    deleteOrcamento(orcamento: Orcamento): Promise<import("mongodb").DeleteResult>;
    create(createOrcamentoDto: CreateOrcamentoDto): Promise<Orcamento>;
}
