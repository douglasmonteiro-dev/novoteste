import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(cpf: string): Promise<User | undefined> {
    return this.userModel.findOne({cpf:cpf}).exec();
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({email:email}).exec();
  }
  async updatePass(user: User) {
    return this.userModel.updateOne({ "cpf": user.cpf}, // Filter
    {$set: {"pass": user.pass}}, // Update
    {upsert: false})
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.cpf === 0 || 
      createUserDto.email === '0' ||
      createUserDto.name === '0' ||
      createUserDto.pass === 0 ||
      createUserDto.phone === '0') {
        return null;
      } else {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
      }
    
  }
}
