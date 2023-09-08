import { Schema , Prop ,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;
//
@Schema()
export class User {

   @Prop({ required : true })
   username : string;

   @Prop()
   password: string;

   @Prop()
   datecreate : Date;

}

export const  UserSchema = SchemaFactory.createForClass(User);
