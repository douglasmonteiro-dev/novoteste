import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicosController } from './servico.controller';
import { Servico, ServicoSchema } from './servico.schema';
import { ServicosService } from './servico.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Servico.name, schema: ServicoSchema }])],
  controllers: [ServicosController],
  providers: [ServicosService],
  exports: [ServicosService]
})
export class ServicosModule {}
