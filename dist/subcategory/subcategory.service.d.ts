import { Model } from 'mongoose';
import { CreateSubCategoryDTO, UpdateSubCategoryDTO } from './dto/create-subcategory.dto';
import { SubCategory } from './interfaces/subcategory.interface';
export declare class SubcategoryService {
    private subCategoryModel;
    constructor(subCategoryModel: Model<SubCategory>);
    findAll(): Promise<SubCategory[]>;
    findById(id: string): Promise<SubCategory>;
    createSubCategory(createSubCategoryDTO: CreateSubCategoryDTO): Promise<SubCategory>;
    updateSubCategory(subCategoryID: string, updateSubCategoryDTO: UpdateSubCategoryDTO): Promise<SubCategory>;
    deleteSubCategory(subCategoryID: string): Promise<SubCategory>;
}
