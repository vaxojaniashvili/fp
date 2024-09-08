import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/interfaces/product.interface';
export declare type OrderSchema = Order & Document;
export declare class Order {
    owner: mongoose.Schema.Types.ObjectId;
    totalPrice: number;
    products: Product[];
    createdAt: Date;
}
export declare const OrderSchema: mongoose.Schema<mongoose.Document<Order, any, any>, mongoose.Model<mongoose.Document<Order, any, any>, any, any, any>, any, any>;
