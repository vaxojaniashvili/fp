import { Product } from './interfaces/product.interface';
import { CreateProductDTO, UpdateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(res: any, createProductDTO: CreateProductDTO): Promise<Product>;
    findAll(res: any): Promise<Product[]>;
    findById(res: any, productID: string): Promise<Product>;
    update(res: any, productID: string, updateProductDTO: UpdateProductDTO): Promise<Product>;
    delete(res: any, productID: string): Promise<Product>;
}
