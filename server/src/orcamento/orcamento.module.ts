import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendasService } from 'src/agenda/agenda.service';
import { OrcamentosController } from './orcamento.controller';
import { Orcamento, OrcamentoSchema } from './orcamento.schema';
import { Agenda, AgendaSchema } from '../agenda/agenda.schema';
import { OrcamentosService } from './orcamento.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Orcamento.name, schema: OrcamentoSchema }, { name: Agenda.name, schema: AgendaSchema }])],
  controllers: [OrcamentosController],
  providers: [OrcamentosService, AgendasService],
  exports: [OrcamentosService]
})
export class OrcamentosModule {}
