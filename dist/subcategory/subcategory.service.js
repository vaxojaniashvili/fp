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
exports.SubcategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SubcategoryService = class SubcategoryService {
    constructor(subCategoryModel) {
        this.subCategoryModel = subCategoryModel;
    }
    async findAll() {
        try {
            return await this.subCategoryModel.find();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(id) {
        try {
            const subCategory = await this.subCategoryModel.findById(id);
            if (!subCategory) {
                throw new common_1.HttpException('Sub category not found', common_1.HttpStatus.NO_CONTENT);
            }
            return subCategory;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createSubCategory(createSubCategoryDTO) {
        try {
            const subCategory = await this.subCategoryModel.create(createSubCategoryDTO);
            return await subCategory.save();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateSubCategory(subCategoryID, updateSubCategoryDTO) {
        try {
            const subCategory = await this.subCategoryModel.findByIdAndUpdate(subCategoryID, updateSubCategoryDTO, { new: true });
            return subCategory;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteSubCategory(subCategoryID) {
        try {
            const subCategory = await this.subCategoryModel.findByIdAndUpdate(subCategoryID, { state: false });
            return subCategory;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
SubcategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('SubCategory')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubcategoryService);
exports.SubcategoryService = SubcategoryService;
//# sourceMappingURL=subcategory.service.js.map