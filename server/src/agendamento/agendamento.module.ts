import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendasService } from 'src/agenda/agenda.service';
import { AgendamentosController } from './agendamento.controller';
import { Agendamento, AgendamentoSchema } from './agendamento.schema';
import { Agenda, AgendaSchema } from '../agenda/agenda.schema';
import { AgendamentosService } from './agendamento.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agendamento.name, schema: AgendamentoSchema }, { name: Agenda.name, schema: AgendaSchema }])],
  controllers: [AgendamentosController],
  providers: [AgendamentosService, AgendasService],
  exports: [AgendamentosService]
})
export class AgendamentosModule {}
