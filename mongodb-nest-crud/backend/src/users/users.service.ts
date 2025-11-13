import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(data: Partial<User>) {
    return this.userModel.create(data);
  }
  findAll() {
    return this.userModel.find().exec();
  }
  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }
  update(id: string, data: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
