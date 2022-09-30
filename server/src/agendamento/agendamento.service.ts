import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateAgendamentoDto } from './create-agendamento.dto';
import { Agendamento, AgendamentoDocument } from './agendamento.schema';

@Injectable()
export class AgendamentosService {
    constructor(@InjectModel(Agendamento.name) private agendamentoModel: Model<AgendamentoDocument>) {}


  async findAll(): Promise<Agendamento[]> {
    return this.agendamentoModel.find().exec();
  }
  async findByUser(userId: string): Promise<Agendamento[] | undefined> {
    return this.agendamentoModel.find({userId:userId}).exec();
  }
  async findbByAgendaId(agendaId: string): Promise<Agendamento[] | undefined> {
    return this.agendamentoModel.find({agendaId:agendaId}).exec();
  }
  async findbyService(servico: string): Promise<Agendamento[] | undefined> {
    return this.agendamentoModel.find({servicoId:servico}).exec();
  }
  async findByInicio(inicio: Date): Promise<Agendamento[] | undefined> {
    return this.agendamentoModel.find({inicio: {$lt: inicio}}).exec();
  }
  async updateAgendamento(agendamento: Agendamento) {
    return this.agendamentoModel.updateOne({ "userId": agendamento.userId, "servicoId": agendamento.servico, "agendaId": agendamento.agendaId}, // Filter
    {$set: agendamento}, // Update
    {upsert: false})
  }
  async deleteAgendamento(agendamento: Agendamento) {
    return this.agendamentoModel.deleteOne({ "userId": agendamento.userId, "servicoId": agendamento.servicoId, "agendaId": agendamento.agendaId})
  }
  async create(createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    if (createAgendamentoDto.userId === null ||
      createAgendamentoDto.servicoId === null ||
      createAgendamentoDto.agendaId === null) {
        return null;
      } else {
        const createdAgendamento = new this.agendamentoModel(createAgendamentoDto);
        return createdAgendamento.save();
      }
    
  }
}
