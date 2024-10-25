import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './entities/users.entity';

@Controller()
export class AppController {
 private readonly usersRepository:Users;
  constructor(private readonly appService: AppService) {
    this.usersRepository 
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hi')
  getHi(): string {
   
  
    return 'hi';
  }
}
