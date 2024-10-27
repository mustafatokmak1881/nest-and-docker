import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): any {
    return {
      status: true,
      message: 'User list will be at here',
    };
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
