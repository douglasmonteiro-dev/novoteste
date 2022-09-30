import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './tickets.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Tickets')


@Controller('ticket')
export class TicketsController {
    constructor(@InjectModel(Ticket.name) public model: ModelType<Ticket>) {
        
    }
    
 }
