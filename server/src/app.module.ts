import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VenomService } from './venom/venom.service';
import { NlpService } from './nlp/nlp.service';
import { TicketsModule } from './tickets/tickets.module';
import { AgendasModule } from './agenda/agenda.module';
import { ServicosModule } from './servico/servico.module';
import { AgendamentosModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `env.${process.env.NODE_ENV}` }), 
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}:${process.env.DB_PORT}`), 
    AuthModule, 
    UsersModule,
    TicketsModule,
    AgendasModule,
    ServicosModule,
    AgendamentosModule
  ],
  providers: [VenomService, NlpService],
})
export class AppModule {}
