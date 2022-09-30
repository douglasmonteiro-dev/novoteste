import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateServicoDto } from './create-servico.dto';
import { Servico, ServicoDocument } from './servico.schema';

@Injectable()
export class ServicosService {
    constructor(@InjectModel(Servico.name) private servicoModel: Model<ServicoDocument>) {}


  async findAll(): Promise<Servico[]> {
    return this.servicoModel.find().exec();
  }
  async findById(userId: string): Promise<Servico | undefined> {
    return this.servicoModel.findOne({_id:userId}).exec();
  }
  async findOne(name: string): Promise<Servico | undefined> {
    return this.servicoModel.findOne({name:name}).exec();
  }
  
  async create(createServicoDto: CreateServicoDto): Promise<Servico> {
    if (createServicoDto.name === null ||
      createServicoDto.descricao === null ||
      createServicoDto.valor === null) {
        return null;
      } else {
        const createdServico = new this.servicoModel(createServicoDto);
        return createdServico.save();
      }
    
  }
  async delete(servico: Servico) {
    return this.servicoModel.deleteOne({ "name": servico.name, "servico": servico.valor})
  }
}
