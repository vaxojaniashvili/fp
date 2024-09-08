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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8, { message: 'The min length of title is 8 characters' }),
    (0, class_validator_1.MaxLength)(20, { message: 'The max length of title is 8 characters' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(25, { message: 'The min length of description is 25 characters' }),
    (0, class_validator_1.MaxLength)(250, {
        message: 'The max length of description is 250 characters',
    }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4, { message: 'The min length of brand is 15 characters' }),
    (0, class_validator_1.MaxLength)(15, { message: 'The max length of brand is 15 characters' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, { message: 'The min length of category is 15 characters' }),
    (0, class_validator_1.MaxLength)(15, { message: 'The max length of category is 15 characters' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4, { message: 'The min length of subcategory is 4 characters' }),
    (0, class_validator_1.MaxLength)(20, { message: 'The max length of subcategory is 4 characters' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "subcategory", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(30, { message: 'The min length of comment is 30 characters' }),
    (0, class_validator_1.MaxLength)(180, { message: 'The max length of comment is 180 characters' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "price", void 0);
exports.CreateProductDTO = CreateProductDTO;
//# sourceMappingURL=create-product.dto.js.map