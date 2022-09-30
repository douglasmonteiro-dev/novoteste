import { Agendamento } from './agendamento.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AgendamentosService } from './agendamento.service';
import { AgendasService } from '../agenda/agenda.service';
export declare class AgendamentosController {
    model: ModelType<Agendamento>;
    private agendaService;
    private agendamentoService;
    constructor(model: ModelType<Agendamento>, agendaService: AgendasService, agendamentoService: AgendamentosService);
    find_by_inicio(req: any): Promise<Agendamento[]>;
    dias_disponiveis(req: any): Promise<import("../agenda/agenda.schema").Agenda[]>;
    agendas_disponiveis(req: any): Promise<{
        agendas: import("../agenda/agenda.schema").Agenda[];
        user: any;
    }>;
    delete(req: any): Promise<import("mongodb").DeleteResult>;
}
