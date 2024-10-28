import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './users/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }
}
