import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './interfaces/test.interface';
import { CreateTestDTO } from './dto/test.dto';
@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private TestModel: Model<Test>) {}
  async create(CreateTestDTO: CreateTestDTO): Promise<any> {
    const createdCat = new this.TestModel(CreateTestDTO);
    return createdCat.save();
  }
  async findAll(): Promise<any> {
    return await this.TestModel.find().exec();
  }
  async findById(id): Promise<Test> {
    const customer = await this.TestModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.TestModel.find(req).exec();
  }
  async update(id, CreateTestDTO: CreateTestDTO): Promise<any> {
    return await this.TestModel.findByIdAndUpdate(id, CreateTestDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.TestModel.findByIdAndRemove(id);
  }
}
