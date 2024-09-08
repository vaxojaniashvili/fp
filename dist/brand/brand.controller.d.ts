import { BrandService } from './brand.service';
import { CreateBrandDTO, UpdateBrandDTO } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';
export declare class BrandController {
    private brandService;
    constructor(brandService: BrandService);
    create(res: any, createBrandDTO: CreateBrandDTO): Promise<Brand>;
    findAll(res: any): Promise<Brand[]>;
    findById(res: any, brandID: string): Promise<Brand>;
    update(res: any, brandID: string, updateBrandDTO: UpdateBrandDTO): Promise<Brand>;
    delete(res: any, brandID: string): Promise<Brand>;
}
