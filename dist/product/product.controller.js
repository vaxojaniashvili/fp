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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const create_product_dto_1 = require("./dto/create-product.dto");
const product_service_1 = require("./product.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(res, createProductDTO) {
        try {
            const product = await this.productService.createProduct(createProductDTO);
            return res.json({
                message: 'Product created successfully',
                product,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll(res) {
        try {
            const products = await this.productService.findAll();
            return res.json({
                message: 'Products obtained successfully',
                products,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(res, productID) {
        try {
            const product = await this.productService.findById(productID);
            return res.json({
                message: 'Product obtained successfully',
                product,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(res, productID, updateProductDTO) {
        try {
            const product = await this.productService.updateProduct(productID, updateProductDTO);
            return res.json({
                message: 'Product update successfully',
                product,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(res, productID) {
        try {
            const product = await this.productService.deleteProduct(productID);
            return res.json({
                message: 'Product removed successfully',
                product,
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
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('productID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map