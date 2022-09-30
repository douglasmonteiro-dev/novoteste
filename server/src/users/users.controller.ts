import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Users')


@Controller('user')
export class UsersController {
    constructor(@InjectModel(User.name) public model: ModelType<User>) {
        
    }
    
 }
