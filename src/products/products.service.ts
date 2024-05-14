import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product/product.interface';

@Injectable()
export class ProductsService {

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
