import { Servico } from './servico.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ServicosService } from './servico.service';
export declare class ServicosController {
    model: ModelType<Servico>;
    private servicoService;
    constructor(model: ModelType<Servico>, servicoService: ServicosService);
    find_all(req: any): Promise<Servico[]>;
    create(req: any): Promise<Servico>;
    select(req: any): Promise<Servico>;
    delete(req: any): Promise<import("mongodb").DeleteResult>;
}
