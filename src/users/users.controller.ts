import { Controller, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { User } from 'src/interfaces/user/user.interface';
import { UsersService } from './users.service';
import { UserDto } from 'src/models/users/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() createUserDto: UserDto): string {
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') userId: string, @Body() user: User): string {
        return this.usersService.updateUser(userId, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') userId: string, @Body() user: User): string {
        return this.usersService.deleteUser(userId, user);
    }
}
