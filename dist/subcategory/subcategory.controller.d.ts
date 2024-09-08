import { CreateSubCategoryDTO, UpdateSubCategoryDTO } from './dto/create-subcategory.dto';
import { SubCategory } from './interfaces/subcategory.interface';
import { SubcategoryService } from './subcategory.service';
export declare class SubcategoryController {
    private subCategoryService;
    constructor(subCategoryService: SubcategoryService);
    create(res: any, createSubCategoryDTO: CreateSubCategoryDTO): Promise<SubCategory>;
    findAll(res: any): Promise<SubCategory[]>;
    findById(res: any, subCategoryID: string): Promise<SubCategory>;
    update(res: any, subCategoryID: string, updateSubCategoryDTO: UpdateSubCategoryDTO): Promise<SubCategory>;
    delete(res: any, subCategoryID: string): Promise<SubCategory>;
}
