import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User, UserDocument } from './users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[]>;
    findOne(cpf: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    updatePass(user: User): Promise<import("mongodb").UpdateResult>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
