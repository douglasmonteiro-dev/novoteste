
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Document } from 'mongoose';


export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  pass: number;

  @Prop()
  @ApiProperty()
  cpf:string;

  @Prop()
  @ApiProperty()
  phone: string;

  @Prop()
  @ApiProperty()
  email: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
