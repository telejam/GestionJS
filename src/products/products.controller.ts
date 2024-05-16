import { Controller, Post, Put, Delete, Param, Get, Body, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/product/product.interface';
import { CreateProductDto } from 'src/models/products/create-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @UseGuards(AuthGuard)
    @Get()
    getProducts(): Product[] {
        return this.productsService.getProducts();
    }

    @UseGuards(AuthGuard)
    @Post()
    createProduct(@Body() createProductDto: CreateProductDto): string {
        return this.productsService.createProduct(createProductDto);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    updateProduct(@Param('id') productId: string, @Body() product: Product): string {
        return this.productsService.updateProduct(productId, product);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    deleteProduct(@Param('id') productId: string, @Body() product: Product): string {
        return this.productsService.deleteProduct(productId, product);
    }
}
