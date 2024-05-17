import { Controller, Post, Put, Delete, Param, Get, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from 'src/models/products/product.dto';
import { Product } from './product.entity';
import { DeleteResult } from 'typeorm';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

	@ApiBearerAuth('access-token')
    @Get()
    @ApiOperation({ summary: 'Get a list of products' })
    @ApiResponse({ status: 200, description: 'List of products.', type: [Product] })
    @ApiQuery({ name: 'name', required: false, type: String, description: 'Name to filter by' })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page' })
      async getProducts(
        @Query('name') name?: string, 
        @Query('page') page?: number, 
        @Query('limit') limit?: number
    ): Promise<{data: Product[]; total: number}> {
        name = name ?? undefined;
        page = page ?? 1;
        limit = limit ?? 10;
        return this.productsService.getProducts(name, page, limit);
    }

	@ApiBearerAuth('access-token')
    @Post()
    @ApiOperation({ summary: 'Create a new product' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.', type: Product })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
      createProduct(@Body() productDto: ProductDto): Promise<Product> {
        return this.productsService.createProduct(productDto);
    }

	@ApiBearerAuth('access-token')
    @Put(':id')
    @ApiOperation({ summary: 'Update a product' })
    @ApiResponse({ status: 200, description: 'The updated product.', type: Product })
    @ApiResponse({ status: 404, description: 'Product not found.' })
      updateProduct(@Param('id') id: number, @Body() product: Product): Promise<Product | null> {
        return this.productsService.updateProduct(id, product);
    }

	@ApiBearerAuth('access-token')
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a product' })
    deleteProduct(@Param('id') id: number): Promise<DeleteResult> {
        return this.productsService.deleteProduct(id);
    }
}
