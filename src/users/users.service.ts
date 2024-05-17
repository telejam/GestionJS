import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/models/users/user.dto';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async getUser(username: string): Promise<User | null> {
        return this.usersRepository.findOne({ where: { username } });
    }

    async createUser(userDto: UserDto): Promise<User> {
        const newUser = this.usersRepository.create(userDto);
        return this.usersRepository.save(newUser);
    }

    async updateUser(id: number, user: User): Promise<User | null> {
        await this.usersRepository.update(id, user);
        return this.usersRepository.findOne({ where: { id } });
    }

    async deleteUser(id: number): Promise<DeleteResult> {
        return await this.usersRepository.delete(id);
    }
}
