import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Module({
	imports: [
		UsersModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>('SECRET'),
				signOptions: { expiresIn: '60m' },
			}),
			inject: [ConfigService],
		}),
        TypeOrmModule.forFeature([User]),
	],
	controllers: [
		AuthController,
	],
	providers: [
		AuthService, 
		UsersService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	]
})
export class AuthModule {}
