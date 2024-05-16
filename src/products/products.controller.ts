import { Controller, Post, Put, Delete, Param, Get, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/product/product.interface';
import { ProductDto } from 'src/models/products/product.dto';
import { ProductFilterDto } from 'src/models/products/product-filter.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts(@Query() filter: ProductFilterDto): Product[] | Product | undefined {
        return this.productsService.getProducts(filter.name, filter.quantity);
    }

    @Post()
    createProduct(@Body() productDto: ProductDto): string {
        return this.productsService.createProduct(productDto);
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
