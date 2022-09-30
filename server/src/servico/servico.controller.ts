import { Controller, Post, UseGuards, Request, Get, Delete } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { Servico } from './servico.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ServicosService } from './servico.service';

@ApiTags('Servicos')


@Controller('servico')
export class ServicosController {
    constructor(@InjectModel(Servico.name) public model: ModelType<Servico>, private servicoService: ServicosService) {
        
    }
    @Get('/')
    async find_all(@Request() req: any) {
        const retorno = await this.servicoService.findAll();
        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Post('novo')
    async create(@Request() req: any) {
        const retorno = await this.servicoService.create(req.body);
        return retorno;
    }

    @Get('selecionar')
    async select(@Request() req: any) {
        const retorno = await this.servicoService.findById(req.body);
        return retorno;
    }

    @UseGuards(JwtAuthGuard)
    @Delete('apagar')
    async delete(@Request() req: any) {
        const retorno = await this.servicoService.delete(req.body);
        return retorno;
    }
 }
