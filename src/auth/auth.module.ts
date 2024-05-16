import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
	imports: [
		UsersModule,
		JwtModule.register({
			secret: '123456789', //TODO .env
			signOptions: { expiresIn: '60m' },
		  }),
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
