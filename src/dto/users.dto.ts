import { IsNotEmpty } from "class-validator";

export class UserDto {

   @IsNotEmpty()
   username : string;
   password: string;
   datecreate : Date;

}