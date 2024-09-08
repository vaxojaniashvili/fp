import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO, UpdateProductDTO } from './dto/create-product.dto';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    createProduct(createProductDTO: CreateProductDTO): Promise<Product>;
    updateProduct(productID: string, updateProductDTO: UpdateProductDTO): Promise<Product>;
    deleteProduct(productID: string): Promise<Product>;
}
