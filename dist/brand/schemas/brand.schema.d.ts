import { Document } from 'mongoose';
export declare type BrandSchema = Brand & Document;
export declare class Brand {
    name: string;
    state: string;
    createdAt: Date;
}
export declare const BrandSchema: import("mongoose").Schema<Document<Brand, any, any>, import("mongoose").Model<Document<Brand, any, any>, any, any, any>, any, any>;
