import { VenomService } from './venom.service';
import { Module } from '@nestjs/common';
import { Whatsapp } from 'venom-bot';

@Module({
    imports: [],
    controllers: [],
    providers: [
        VenomService,
        Whatsapp
    ],
})
export class VenomModule { }
