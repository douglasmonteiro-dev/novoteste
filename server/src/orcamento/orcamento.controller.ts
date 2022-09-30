import { Controller, Post, Request, UseGuards, Get, Delete } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { Orcamento } from './orcamento.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrcamentosService } from './orcamento.service';
import { AgendasService } from '../agenda/agenda.service';

@ApiTags('Orcamentos')


@Controller('orcamento')
export class OrcamentosController {
    constructor(@InjectModel(Orcamento.name) public model: ModelType<Orcamento>, private agendaService: AgendasService, private orcamentoService: OrcamentosService) {
       
    }

    @Get('/')
    async find_by_inicio(@Request() req: any) {
        const retorno = await this.orcamentoService.findByUser(req.body);
        return retorno;
    }

    @Get('dias-disponiveis')
    async dias_disponiveis(@Request() req: any) {
        const retorno = await this.agendaService.find({inicio:{$lte: req.query.inicio}, fim: {$gte: req.query.fim}});
        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Get('agendas-disponiveis')
    async agendas_disponiveis(@Request() req: any) {
        const dia = new Date()
        let agendas = await this.agendaService.find({inicio:{$lte: req.query.dia}, fim: {$gte: req.query.dia}})
        for (let agenda of agendas) {
            agenda.agendamentos = await this.orcamentoService.findbByAgendaId(agenda._id);
        }
        const retorno = {agendas: agendas, user: req.userId};
        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Delete('apagar')
    async delete(@Request() req: any) {
        const retorno = await this.orcamentoService.deleteOrcamento(req.body);
        return retorno;
    }
 }
