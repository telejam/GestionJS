import { Controller, Post, Put, Delete, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/product/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    createProduct(product: Product): string {
        return this.productsService.createProduct(product);
    }

    @Put(':id')
    updateProduct(@Param('id') productId: string, product: Product): string {
        return this.productsService.updateProduct(productId, product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') productId: string, product: Product): string {
        return this.productsService.deleteProduct(productId, product);
    }
}
