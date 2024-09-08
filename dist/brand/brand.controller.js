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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const brand_service_1 = require("./brand.service");
const create_brand_dto_1 = require("./dto/create-brand.dto");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async create(res, createBrandDTO) {
        try {
            const brand = await this.brandService.createBrand(createBrandDTO);
            return res.json({
                message: 'Brand created successfully',
                brand,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll(res) {
        try {
            const brand = await this.brandService.findAll();
            return res.json({
                message: 'Brand obtained successfully',
                brand,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(res, brandID) {
        try {
            const brand = await this.brandService.findById(brandID);
            return res.json({
                message: 'Brand obtained successfully',
                brand,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(res, brandID, updateBrandDTO) {
        try {
            const brand = await this.brandService.updateBrand(brandID, updateBrandDTO);
            return res.json({
                message: 'Brand update successfully',
                brand,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(res, brandID) {
        try {
            const brand = await this.brandService.deleteBrand(brandID);
            return res.json({
                message: 'Brand removed successfully',
                brand,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_brand_dto_1.CreateBrandDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':brandID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('brandID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':brandID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('brandID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':brandID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('brandID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "delete", null);
BrandController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map