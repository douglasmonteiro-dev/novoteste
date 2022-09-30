import { Orcamento } from './orcamento.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { OrcamentosService } from './orcamento.service';
import { AgendasService } from '../agenda/agenda.service';
export declare class OrcamentosController {
    model: ModelType<Orcamento>;
    private agendaService;
    private orcamentoService;
    constructor(model: ModelType<Orcamento>, agendaService: AgendasService, orcamentoService: OrcamentosService);
    find_by_inicio(req: any): Promise<Orcamento[]>;
    dias_disponiveis(req: any): Promise<import("../agenda/agenda.schema").Agenda[]>;
    agendas_disponiveis(req: any): Promise<{
        agendas: import("../agenda/agenda.schema").Agenda[];
        user: any;
    }>;
    delete(req: any): Promise<import("mongodb").DeleteResult>;
}
