import { Document } from 'mongoose';
export interface SubCategory extends Document {
    id: string;
    name: string;
    state: boolean;
    created: Date;
}
