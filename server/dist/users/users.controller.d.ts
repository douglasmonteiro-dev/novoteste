import { User } from './users.schema';
import { ModelType } from '@typegoose/typegoose/lib/types';
export declare class UsersController {
    model: ModelType<User>;
    constructor(model: ModelType<User>);
}
