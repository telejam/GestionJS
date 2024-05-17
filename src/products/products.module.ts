import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Module({
    imports: [
        JwtModule,
        TypeOrmModule.forFeature([Product]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
