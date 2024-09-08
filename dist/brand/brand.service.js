"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BrandService = class BrandService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async findAll() {
        try {
            return await this.brandModel.find();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(id) {
        try {
            const brand = await this.brandModel.findById(id);
            if (!brand) {
                throw new common_1.HttpException('Brand not found', common_1.HttpStatus.NO_CONTENT);
            }
            return brand;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createBrand(createBrandDTO) {
        try {
            const brand = await this.brandModel.create(createBrandDTO);
            return await brand.save();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateBrand(brandID, updateBrandDTO) {
        try {
            const brand = await this.brandModel.findByIdAndUpdate(brandID, updateBrandDTO, { new: true });
            return brand;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteBrand(brandID) {
        try {
            const brand = await this.brandModel.findByIdAndUpdate(brandID, {
                state: false,
            });
            return brand;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Brand')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map