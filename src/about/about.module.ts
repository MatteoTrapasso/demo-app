import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutSchema } from './schemas/about.schema';

@Module({
  controllers: [AboutController],
  providers: [AboutService],
  imports: [
    MongooseModule.forFeature([{ name: 'About', schema: AboutSchema }]),
  ],
})
export class AboutModule {}
