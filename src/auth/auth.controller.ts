import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/models/users/user.dto';
import { SkipGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @SkipGuard()
    @Post('login')
    signIn(@Body() signInDto: UserDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
