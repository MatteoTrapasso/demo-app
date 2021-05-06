import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://traps:traps@cluster0.kuac6.mongodb.net/about?retryWrites=true&w=majority',
    ),
    AboutModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
