    import { Controller, Post, Put, Delete, Param } from '@nestjs/common';
import { User } from 'src/interfaces/user/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    createUser(user: User): string {
        return this.usersService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') userId: string, user: User): string {
        return this.usersService.updateUser(userId, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') userId: string, user: User): string {
        return this.usersService.deleteUser(userId, user);
    }
}
