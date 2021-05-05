import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://<username>:<password>1@ds061711.mlab.com:61711/heroku_7q1xt2kd',
    ),
    AboutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
