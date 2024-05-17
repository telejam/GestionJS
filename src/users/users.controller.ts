import { Controller, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/models/users/user.dto';
import { DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) { }

	@ApiBearerAuth('access-token')
	@Post()
	@ApiOperation({ summary: 'Create a new user' })
	@ApiResponse({ status: 201, description: 'The user has been successfully created.', type: User })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	createUser(@Body() userDto: UserDto): Promise<User> {
		return this.usersService.createUser(userDto);
	}

	@ApiBearerAuth('access-token')
	@Put(':id')
	@ApiOperation({ summary: 'Update a user' })
	@ApiResponse({ status: 200, description: 'The updated user.', type: User })
	@ApiResponse({ status: 404, description: 'User not found.' })
	updateUser(@Param('id') id: number, @Body() user: User): Promise<User | null> {
		return this.usersService.updateUser(id, user);
	}

	@ApiBearerAuth('access-token')
	@Delete(':id')
	@ApiOperation({ summary: 'Delete a user' })
	deleteUser(@Param('id') id: number): Promise<DeleteResult> {
		return this.usersService.deleteUser(id);
	}
}
