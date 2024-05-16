import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product/product.interface';
import { ProductDto } from 'src/models/products/product.dto';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = []

    getProducts(name: string, quantity: number): Product[] | Product | undefined {
        // TODO GetAll

        if (name)
            return this.products.find(product => product.name === name);
        else
            return this.products;
    }

    createProduct(productDto: ProductDto): string {
        // TODO Add
        console.log(productDto);

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
