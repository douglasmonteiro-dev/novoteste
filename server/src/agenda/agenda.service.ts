import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateAgendaDto } from './create-agenda.dto';
import { Agenda, AgendaDocument } from './agenda.schema';

@Injectable()
export class AgendasService {
    constructor(@InjectModel(Agenda.name) private agendaModel: Model<AgendaDocument>) {}


  async findAll(): Promise<Agenda[]> {
    return this.agendaModel.find().exec();
  }
  async findbyUser(userId: string): Promise<Agenda[] | undefined> {
    return this.agendaModel.find({userId:userId}).exec();
  }
  async findbyService(servico: string): Promise<Agenda[] | undefined> {
    return this.agendaModel.find({servico:servico}).exec();
  }
  async findByInicio(inicio: Date): Promise<Agenda[] | undefined> {
    return this.agendaModel.find({inicio: {$lt: inicio}}).exec();
  }
  async find(params: any): Promise<Agenda[] | undefined> {
    return this.agendaModel.find(params).exec();
  }
  async updateAgenda(agenda: Agenda) {
    return this.agendaModel.updateOne({ "userId": agenda.userId, "servico": agenda.servico, "inicio": agenda.inicio}, // Filter
    {$set: agenda}, // Update
    {upsert: false})
  }
  async deleteAgenda(agenda: Agenda) {
    return this.agendaModel.deleteOne({ "userId": agenda.userId, "servico": agenda.servico, "inicio": agenda.inicio})
  }
  async create(createAgendaDto: CreateAgendaDto): Promise<Agenda> {
    if (createAgendaDto.inicio === null ||
      createAgendaDto.fim === null ||
      createAgendaDto.userId === null) {
        return null;
      } else {
        const createdAgenda = new this.agendaModel(createAgendaDto);
        return createdAgenda.save();
      }
    
  }
}
