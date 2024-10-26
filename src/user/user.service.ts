import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): any {
    return {
      status: true,
      message: 'User list will be at here',
    };
  }
}
