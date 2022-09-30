import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Agendamento, AgendamentoSchema } from 'src/agendamento/agendamento.schema';
import { AgendamentosService } from 'src/agendamento/agendamento.service';
import { AgendasController } from './agenda.controller';
import { Agenda, AgendaSchema } from './agenda.schema';
import { AgendasService } from './agenda.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Agenda.name, schema: AgendaSchema }, { name: Agendamento.name, schema: AgendamentoSchema }])],
  controllers: [AgendasController],
  providers: [AgendasService, AgendamentosService],
  exports: [AgendasService]
})
export class AgendasModule {}
