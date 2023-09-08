import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    
    MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    UsersModule
  ],
})
export class AppModule {}
