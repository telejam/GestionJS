import { Controller, Post, Put, Delete, Param, Get, Body, Query } from '@nestjs/common';
import { User } from 'src/interfaces/user/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/models/users/create-user.dto';
import { GetByUsernameDto } from 'src/models/users/get-by-username.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUser(@Query() filter: GetByUsernameDto): Promise<User | undefined> {
        return this.usersService.getUser(filter.username);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): string {
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
