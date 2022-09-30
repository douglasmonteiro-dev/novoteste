
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Document } from 'mongoose';


export type ServicoDocument = Servico & Document;

@Schema()
export class Servico {

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  descricao: string;

  @Prop()
  @ApiProperty()
  instrucao: string;

  @Prop()
  @ApiProperty()
  endereco: string;

  @Prop()
  @ApiProperty()
  valor: string;

  @Prop()
  @ApiProperty()
  formaPagamento: string;

  @Prop()
  @ApiProperty()
  tempoAtendimento: string;
}

export const ServicoSchema = SchemaFactory.createForClass(Servico);
