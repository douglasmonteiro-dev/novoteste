import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateOrcamentoDto } from './create-orcamento.dto';
import { Orcamento, OrcamentoDocument } from './orcamento.schema';

@Injectable()
export class OrcamentosService {
    constructor(@InjectModel(Orcamento.name) private orcamentoModel: Model<OrcamentoDocument>) {}


  async findAll(): Promise<Orcamento[]> {
    return this.orcamentoModel.find().exec();
  }
  async findByUser(userId: string): Promise<Orcamento[] | undefined> {
    return this.orcamentoModel.find({userId:userId}).exec();
  }
  async findbByAgendaId(agendaId: string): Promise<Orcamento[] | undefined> {
    return this.orcamentoModel.find({agendaId:agendaId}).exec();
  }
  async findbyService(servico: string): Promise<Orcamento[] | undefined> {
    return this.orcamentoModel.find({servicoId:servico}).exec();
  }
  async findByInicio(inicio: Date): Promise<Orcamento[] | undefined> {
    return this.orcamentoModel.find({inicio: {$lt: inicio}}).exec();
  }
  async updateOrcamento(orcamento: Orcamento) {
    return this.orcamentoModel.updateOne({ "userId": orcamento.userId, "servicoId": orcamento.servico, "agendaId": orcamento.agendaId}, // Filter
    {$set: orcamento}, // Update
    {upsert: false})
  }
  async deleteOrcamento(orcamento: Orcamento) {
    return this.orcamentoModel.deleteOne({ "userId": orcamento.userId, "servicoId": orcamento.servicoId, "agendaId": orcamento.agendaId})
  }
  async create(createOrcamentoDto: CreateOrcamentoDto): Promise<Orcamento> {
    if (createOrcamentoDto.userId === null ||
      createOrcamentoDto.servicoId === null ||
      createOrcamentoDto.agendaId === null) {
        return null;
      } else {
        const createdOrcamento = new this.orcamentoModel(createOrcamentoDto);
        return createdOrcamento.save();
      }
    
  }
}
