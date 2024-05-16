import { Controller, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { User } from 'src/interfaces/user/user.interface';
import { UsersService } from './users.service';
import { UserDto } from 'src/models/users/user.dto';
import { GetByUsernameDto } from 'src/models/users/get-by-username.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(AuthGuard)
    @Post()
    createUser(@Body() createUserDto: UserDto): string {
        return this.usersService.createUser(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    updateUser(@Param('id') userId: string, @Body() user: User): string {
        return this.usersService.updateUser(userId, user);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    deleteUser(@Param('id') userId: string, @Body() user: User): string {
        return this.usersService.deleteUser(userId, user);
    }
}
