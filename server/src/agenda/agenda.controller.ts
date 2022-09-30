import { Controller, Post, Request, UseGuards, Get, Delete } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { Agenda } from './agenda.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AgendasService } from './agenda.service';
import { AgendamentosService } from 'src/agendamento/agendamento.service';

@ApiTags('Agendas')


@Controller('agenda')
export class AgendasController {
    constructor(@InjectModel(Agenda.name) public model: ModelType<Agenda>,  private agendaService: AgendasService, private agendamentoService: AgendamentosService) {
       
    }

    @Get('/')
    async find_by_inicio(@Request() req: any) {
        
        
        const agendas = await this.agendaService.findAll();
        for (let agenda of agendas) {
            agenda.agendamentos = await this.agendamentoService.findbByAgendaId(agenda._id);
        }
        
        const retorno = {agendas: agendas, user: req.userId};

        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Post('nova')
    async reset_password(@Request() req: any) {
        const retorno = await this.agendaService.create(req.body);
        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Get('selecionar')
    async find_by_user(@Request() req: any) {
        const retorno = await this.agendaService.findbyUser(req.body);
        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Delete('apagar')
    async delete(@Request() req: any) {
        const retorno = await this.agendaService.deleteAgenda(req.body);
        return retorno;
    }
 }
