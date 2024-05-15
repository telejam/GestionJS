import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product/product.interface';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = []

    getProducts(): Product[] {
        //GetAll

        return this.products;
    }

    createProduct(product: Product): string {
        //Add

        return "Product added";
    }

    updateProduct(productId: string, product: Product): string {
        //Update

        return "Product updated";
    }

    deleteProduct(productId: string, product: Product): string {
        //Delete

        return "Product deleted";
    }
}
