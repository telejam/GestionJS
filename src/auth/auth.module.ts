import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';

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
	]
})
export class AuthModule {}
