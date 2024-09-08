import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type CommentSchema = Comment & Document;
export declare class Comment {
    productID: mongoose.Schema.Types.ObjectId;
    comment: string;
    state: boolean;
    userID: mongoose.Schema.Types.ObjectId;
    created: Date;
}
export declare const CommentSchema: mongoose.Schema<mongoose.Document<Comment, any, any>, mongoose.Model<mongoose.Document<Comment, any, any>, any, any, any>, any, any>;
