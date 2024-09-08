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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async UploadAvatarToCloudinary(file) {
        try {
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOne(username) {
        try {
            return await this.userModel.findOne({ username });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async findAll() {
        return await this.userModel.find();
    }
    async findUserById(userID) {
        try {
            const user = await this.userModel.findById(userID);
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NO_CONTENT);
            }
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateUser(userID, updateUserDTO) {
        try {
            const { password } = updateUserDTO;
            const salt = await bcrypt.genSalt();
            const hashPassword = await this.hashPassword(password, salt);
            updateUserDTO.password = hashPassword;
            const user = await this.userModel.findByIdAndUpdate(userID, updateUserDTO, { new: true });
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteUSer(userID) {
        try {
            const user = await this.userModel.findByIdAndUpdate(userID, {
                state: false,
            });
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map