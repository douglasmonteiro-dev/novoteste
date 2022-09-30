
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Document } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {

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

export const UserSchema = SchemaFactory.createForClass(User);
