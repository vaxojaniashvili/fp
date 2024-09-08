import { Model } from 'mongoose';
import { CreateBrandDTO, UpdateBrandDTO } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';
export declare class BrandService {
    private brandModel;
    constructor(brandModel: Model<Brand>);
    findAll(): Promise<Brand[]>;
    findById(id: string): Promise<Brand>;
    createBrand(createBrandDTO: CreateBrandDTO): Promise<Brand>;
    updateBrand(brandID: string, updateBrandDTO: UpdateBrandDTO): Promise<Brand>;
    deleteBrand(brandID: string): Promise<Brand>;
}
