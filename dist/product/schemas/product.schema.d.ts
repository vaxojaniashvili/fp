import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type ProductSchema = Product & Document;
export declare class Product {
    title: string;
    description: string;
    brand: mongoose.Schema.Types.ObjectId;
    category: mongoose.Schema.Types.ObjectId;
    subcategory: mongoose.Schema.Types.ObjectId;
    image: string;
    price: number;
    comment: mongoose.Schema.Types.ObjectId;
    owner: mongoose.Schema.Types.ObjectId;
    state: boolean;
    created: Date;
}
export declare const ProductSchema: mongoose.Schema<mongoose.Document<Product, any, any>, mongoose.Model<mongoose.Document<Product, any, any>, any, any, any>, any, any>;
