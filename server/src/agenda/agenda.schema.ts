
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Document } from 'mongoose';
import { Agendamento } from 'src/agendamento/agendamento.schema';


export type AgendaDocument = Agenda & Document;

@Schema()
export class Agenda {

  @Prop()
  @ApiProperty()
  _id: string;
  
  @Prop()
  @ApiProperty()
  userId: string;

  @Prop()
  @ApiProperty()
  servico: string;

  @Prop()
  @ApiProperty()
  inicio: Date;

  @Prop()
  @ApiProperty()
  fim: Date;

  @Prop()
  @ApiProperty()
  horaInicio: string;

  @Prop()
  @ApiProperty()
  horaFim: string;
  
  @Prop()
  @ApiProperty()
  tempoAtendimento: number;

  @Prop()
  @ApiProperty()
  endereco: string;

  @Prop()
  @ApiProperty()
  lat: string;

  @Prop()
  @ApiProperty()
  lng: string;

  @Prop()
  @ApiProperty()
  valor: string;

  @Prop()
  @ApiProperty()
  formaPagamento: string;

  @Prop()
  @ApiProperty()
  agendamentos: Agendamento[];

  @Prop()
  @ApiProperty()
  diasDaSemana: string;
}

export const AgendaSchema = SchemaFactory.createForClass(Agenda);
