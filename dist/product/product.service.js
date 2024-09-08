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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll() {
        try {
            return await this.productModel.find();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(id) {
        try {
            const product = await this.productModel
                .findById(id)
                .populate('brand')
                .populate('category')
                .populate('subcategory');
            if (!product) {
                throw new common_1.HttpException('Product not found', common_1.HttpStatus.NO_CONTENT);
            }
            return product;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createProduct(createProductDTO) {
        try {
            const product = await this.productModel.create(createProductDTO);
            return await product.save();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateProduct(productID, updateProductDTO) {
        try {
            const product = await this.productModel.findByIdAndUpdate(productID, updateProductDTO, { new: true });
            return product;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteProduct(productID) {
        try {
            const product = await this.productModel.findByIdAndUpdate(productID, {
                state: false,
            });
            return product;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map