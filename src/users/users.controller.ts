import { Get , Post , Param , Body , Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
   constructor(private readonly UserServies : UsersService) {}
   @Get()
   Hello(@Body() body : UserDto) {
      return this.UserServies.FindOne( body.username );
   }

   @Get("/allusers")
   FindAll() {
      return this.UserServies.FindAll();
   }

   @Post("/rank/:id")
   Addrank(@Param() paramas) {
      return "Data : "+paramas.id
   }

   @Post("/rank")
   AddRank() {
      return "User Ranked"
   }

   @Post("/Register")
   Add(@Body() body: UserDto) {
      return this.UserServies.Add(body);
   }

}
