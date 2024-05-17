import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';

@Module({
	imports: [
		UsersModule, 
		ProductsModule, 
		ConfigModule.forRoot({
		isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get<string>('DATABASE_HOST'),
				port: configService.get<number>('DATABASE_PORT'),
				username: configService.get<string>('DATABASE_USER'),
				password: configService.get<string>('DATABASE_PASSWORD'),
				database: configService.get<string>('DATABASE_NAME'),
				entities: [User, Product],
				synchronize: true, // Usar solo en desarrollo
			}),
			inject: [ConfigService],
		}),
		AuthModule, 
	],
})
export class AppModule {}
