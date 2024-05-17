import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    imports: [
        JwtModule,
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
