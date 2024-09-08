import { Document } from 'mongoose';
export declare type SubCategorySchema = SubCategory & Document;
export declare class SubCategory {
    name: string;
    state: boolean;
    created: Date;
}
export declare const SubCategorySchema: import("mongoose").Schema<Document<SubCategory, any, any>, import("mongoose").Model<Document<SubCategory, any, any>, any, any, any>, any, any>;
