import { CategoryService } from './category.service';
import { CreateCategoryDTO, UpdateCategoryDTO } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(res: any, createCategoryDTO: CreateCategoryDTO): Promise<Category>;
    findAll(res: any): Promise<Category[]>;
    findById(res: any, categoryID: string): Promise<Category>;
    update(res: any, categoryID: string, updateCategoryDTO: UpdateCategoryDTO): Promise<Category>;
    delete(res: any, categoryID: string): Promise<Category>;
}
