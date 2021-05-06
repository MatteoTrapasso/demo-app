import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestSchema } from './schemas/test.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [TestController],
  providers: [TestService],
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
})
export class TestModule {}
