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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async findAll() {
        try {
            return await this.categoryModel.find();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(id) {
        try {
            const category = await this.categoryModel.findById(id);
            if (!category) {
                throw new common_1.HttpException('Category not found', common_1.HttpStatus.NO_CONTENT);
            }
            return category;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createCategory(createCategoryDTO) {
        try {
            const category = await this.categoryModel.create(createCategoryDTO);
            return await category.save();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateCategory(categoryID, updateCategoryDTO) {
        try {
            const category = await this.categoryModel.findByIdAndUpdate(categoryID, updateCategoryDTO, { new: true });
            return category;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteCategory(categoryID) {
        try {
            const category = await this.categoryModel.findByIdAndUpdate(categoryID, {
                state: false,
            });
            return category;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map