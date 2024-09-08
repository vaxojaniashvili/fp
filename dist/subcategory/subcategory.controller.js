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
exports.SubcategoryController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_subcategory_dto_1 = require("./dto/create-subcategory.dto");
const subcategory_service_1 = require("./subcategory.service");
let SubcategoryController = class SubcategoryController {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    async create(res, createSubCategoryDTO) {
        try {
            const subCategory = await this.subCategoryService.createSubCategory(createSubCategoryDTO);
            return res.json({
                message: 'Sub Category created successfully',
                subCategory,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll(res) {
        try {
            const subCategory = await this.subCategoryService.findAll();
            return res.json({
                message: 'Sub Categories obtained successfully',
                subCategory,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(res, subCategoryID) {
        try {
            const subCategory = await this.subCategoryService.findById(subCategoryID);
            return res.json({
                message: 'SubCategory obtained successfully',
                subCategory,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(res, subCategoryID, updateSubCategoryDTO) {
        try {
            const subCategory = await this.subCategoryService.updateSubCategory(subCategoryID, updateSubCategoryDTO);
            return res.json({
                message: 'SubCategory update successfully',
                subCategory,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(res, subCategoryID) {
        try {
            const subCategory = await this.subCategoryService.deleteSubCategory(subCategoryID);
            return res.json({
                message: 'SubCategory removed successfully',
                subCategory,
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
    __metadata("design:paramtypes", [Object, create_subcategory_dto_1.CreateSubCategoryDTO]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':subCategoryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('subCategoryID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':subCategoryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('subCategoryID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':subCategoryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('subCategoryID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "delete", null);
SubcategoryController = __decorate([
    (0, common_1.Controller)('subcategory'),
    __metadata("design:paramtypes", [subcategory_service_1.SubcategoryService])
], SubcategoryController);
exports.SubcategoryController = SubcategoryController;
//# sourceMappingURL=subcategory.controller.js.map