import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user/user.interface';
import { UserDto } from 'src/models/users/user.dto';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    async getUser(username: string): Promise<User | undefined> {
        // TODO GetByUsername
        console.log(username);

        return this.users.find(user => user.username === username);
    }

    createUser(createUserDto: UserDto): string {
        // TODO Add
        console.log(createUserDto);

        return "User added";
    }

    updateUser(userId: string, user: User): string {
        // TODO Update
        console.log(user);
        
        return "User updated";
    }

    deleteUser(userId: string, user: User): string {
        // TODO Delete
        console.log(user);

        return "User deleted";
    }
}
