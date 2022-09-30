
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Document } from 'mongoose';


export type AgendamentoDocument = Agendamento & Document;

@Schema()
export class Agendamento {

  @Prop()
  @ApiProperty()
  userId: string;

  @Prop()
  @ApiProperty()
  agendaId: string;

  @Prop()
  @ApiProperty()
  servicoId: string;

  @Prop()
  @ApiProperty()
  data: Date;

  @Prop()
  @ApiProperty()
  hora: string;

  @Prop()
  @ApiProperty()
  minutos: string;
  
  @Prop()
  @ApiProperty()
  servico: string;

  @Prop()
  @ApiProperty()
  nome: string;

  @Prop()
  @ApiProperty()
  profissional: string;

  @Prop()
  @ApiProperty()
  tempoAtendimento: string;

  @Prop()
  @ApiProperty()
  pagamento: boolean;

  @Prop()
  @ApiProperty()
  confirmado: boolean;

 
}

export const AgendamentoSchema = SchemaFactory.createForClass(Agendamento);
