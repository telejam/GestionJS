import { Controller, Post, Put, Delete, Param, Get, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/product/product.interface';
import { CreateProductDto } from 'src/models/products/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts(): Product[] {
        return this.productsService.getProducts();
    }

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto): string {
        return this.productsService.createProduct(createProductDto);
    }

    @Put(':id')
    updateProduct(@Param('id') productId: string, @Body() product: Product): string {
        return this.productsService.updateProduct(productId, product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') productId: string, @Body() product: Product): string {
        return this.productsService.deleteProduct(productId, product);
    }
}
