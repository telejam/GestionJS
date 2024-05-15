import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product/product.interface';
import { CreateProductDto } from 'src/models/products/create-product.dto';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = []

    getProducts(): Product[] {
        // TODO GetAll

        return this.products;
    }

    createProduct(createProductDto: CreateProductDto): string {
        // TODO Add
        console.log(createProductDto);

        return "Product added";
    }

    updateProduct(productId: string, product: Product): string {
        // TODO Update
        console.log(product);

        return "Product updated";
    }

    deleteProduct(productId: string, product: Product): string {
        // TODO Delete
        console.log(product);

        return "Product deleted";
    }
}
