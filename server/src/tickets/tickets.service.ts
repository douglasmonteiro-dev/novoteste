import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateTicketDto } from './create-ticket.dto';
import { Ticket, TicketDocument } from './tickets.schema';

@Injectable()
export class TicketsService {
    constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}


  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }
  async findOne(cpf: string): Promise<Ticket | undefined> {
    return this.ticketModel.findOne({cpf:cpf}).exec();
  }
  async findByEmail(email: string): Promise<Ticket | undefined> {
    return this.ticketModel.findOne({email:email}).exec();
  }
  async updatePass(ticket: Ticket) {
    return this.ticketModel.updateOne({ "cpf": ticket.cpf}, // Filter
    {$set: {"pass": ticket.pass}}, // Update
    {upsert: false})
  }
  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    if (createTicketDto.email === '0' ||
      createTicketDto.name === '0' ||
      createTicketDto.phone === '0') {
        return null;
      } else {
        const createdTicket = new this.ticketModel(createTicketDto);
        return createdTicket.save();
      }
    
  }
}
