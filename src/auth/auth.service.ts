import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getUser(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const { password, ...result } = user;
        
        // TODO: JWT 
        return result;
    }
}
