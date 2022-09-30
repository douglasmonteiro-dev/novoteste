import { Model } from 'mongoose';
import { CreateServicoDto } from './create-servico.dto';
import { Servico, ServicoDocument } from './servico.schema';
export declare class ServicosService {
    private servicoModel;
    constructor(servicoModel: Model<ServicoDocument>);
    findAll(): Promise<Servico[]>;
    findById(userId: string): Promise<Servico | undefined>;
    findOne(name: string): Promise<Servico | undefined>;
    create(createServicoDto: CreateServicoDto): Promise<Servico>;
    delete(servico: Servico): Promise<import("mongodb").DeleteResult>;
}
