import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/models/products/product.dto';
import { Product } from './product.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = []

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async getProducts(name: string | undefined, page: number, limit: number): Promise<{data: Product[]; total: number}> {
        const [data, total] = await this.productRepository.findAndCount({ 
            skip: (page - 1) * limit,
            take: limit,
            where: { name } 
        });

        return { data, total };
    }

    async createProduct(productDto: ProductDto): Promise<Product> {
        const newProduct = this.productRepository.create(productDto);
        return this.productRepository.save(newProduct);
    }

    async updateProduct(id: number, product: Product): Promise<Product | null> {
        await this.productRepository.update(id, product);
        return this.productRepository.findOne({ where: { id } });
    }

    async deleteProduct(id: number): Promise<DeleteResult> {
        return await this.productRepository.delete(id);
    }
}
