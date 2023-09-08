import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, now } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';

@Injectable()
export class UsersService {

   constructor(@InjectModel(User.name) private userModel : Model<UserDocument> ) {}

   getApp():string {
      return "Jhon Tried Coding"
   }

   Add(body : UserDto) {

      const newuser = {
         username : body.username,
         password : body.password,
         datecreate : Date()
      }

       return this.userModel.create(newuser);
   }

   FindAll() {
      return this.userModel.find();
   }

   async FindOne( username: string )  {
      const user =  await this.userModel.findOne({username}).exec();
      const myuser = {
         username : user.username
      };
      
      return myuser

   }


}
