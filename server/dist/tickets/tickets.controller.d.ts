import { Ticket } from './tickets.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
export declare class TicketsController {
    model: ModelType<Ticket>;
    constructor(model: ModelType<Ticket>);
}
