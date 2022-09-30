import { Agenda } from './agenda.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AgendasService } from './agenda.service';
import { AgendamentosService } from 'src/agendamento/agendamento.service';
export declare class AgendasController {
    model: ModelType<Agenda>;
    private agendaService;
    private agendamentoService;
    constructor(model: ModelType<Agenda>, agendaService: AgendasService, agendamentoService: AgendamentosService);
    find_by_inicio(req: any): Promise<{
        agendas: Agenda[];
        user: any;
    }>;
    reset_password(req: any): Promise<Agenda>;
    find_by_user(req: any): Promise<Agenda[]>;
    delete(req: any): Promise<import("mongodb").DeleteResult>;
}
