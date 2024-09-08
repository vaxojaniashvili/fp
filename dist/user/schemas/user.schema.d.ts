import { Document } from 'mongoose';
export declare type UserSchema = User & Document;
export declare class User {
    username: string;
    password: string;
    email: string;
    seller: boolean;
    state: boolean;
    isEmailConfirmed: boolean;
    createdAt: Date;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, any, any>;
