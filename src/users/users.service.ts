import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user/user.interface';

@Injectable()
export class UsersService {

    createUser(user: User): string {
        //Add

        return "User added";
    }

    updateUser(userId: string, user: User): string {
        //Update

        return "User updated";
    }

    deleteUser(userId: string, user: User): string {
        //Delete

        return "User deleted";
    }
}
