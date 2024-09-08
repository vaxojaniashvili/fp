import { Document } from 'mongoose';
export declare type CategorySchema = Category & Document;
export declare class Category {
    name: string;
    state: boolean;
    createdAt: Date;
}
export declare const CategorySchema: import("mongoose").Schema<Document<Category, any, any>, import("mongoose").Model<Document<Category, any, any>, any, any, any>, any, any>;
