import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async signIn(username: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.getUser(username);
        // TODO bcrypt pass 
        
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
