import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(): any {
        return 'User list will be at here';
    }
}
