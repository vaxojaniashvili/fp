import { Model } from 'mongoose';
import { CreateCategoryDTO, UpdateCategoryDTO } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    findAll(): Promise<Category[]>;
    findById(id: string): Promise<Category>;
    createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category>;
    updateCategory(categoryID: string, updateCategoryDTO: UpdateCategoryDTO): Promise<Category>;
    deleteCategory(categoryID: string): Promise<Category>;
}
