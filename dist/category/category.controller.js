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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(res, createCategoryDTO) {
        try {
            const category = await this.categoryService.createCategory(createCategoryDTO);
            return res.json({
                message: 'Category created successfully',
                category,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll(res) {
        try {
            const category = await this.categoryService.findAll();
            return res.json({
                message: 'Categories obtained successfully',
                category,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(res, categoryID) {
        try {
            const category = await this.categoryService.findById(categoryID);
            return res.json({
                message: 'Category obtained successfully',
                category,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(res, categoryID, updateCategoryDTO) {
        try {
            const category = await this.categoryService.updateCategory(categoryID, updateCategoryDTO);
            return res.json({
                message: 'Category update successfully',
                category,
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async delete(res, categoryID) {
        try {
            const category = await this.categoryService.deleteCategory(categoryID);
            return res.json({
                message: 'Category removed successfully',
                category,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_category_dto_1.CreateCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':categoryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('categoryID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':categoryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('categoryID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':categoryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('categoryID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delete", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map