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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AuthService = class AuthService {
    constructor(userModel, userService, jwtService) {
        this.userModel = userModel;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async registerUser(registerUserDTO) {
        try {
            const { username, password, email } = registerUserDTO;
            const salt = await bcrypt.genSalt();
            const userExist = await this.userService.findOne(username);
            if (userExist) {
                throw new common_1.ConflictException('Username already exist');
            }
            const user = new this.userModel(registerUserDTO);
            user.username = username;
            user.email = email;
            user.password = await this.hashPassword(password, salt);
            const token = Math.floor(1000 + Math.random() * 9000).toString();
            return await user.save();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async validateUser(username, pass) {
        const user = await this.userService.findOne(username);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password } = user, rest = __rest(user, ["password"]);
            return rest;
        }
        return null;
    }
    async login(user) {
        const payload = {
            sub: user._doc._id,
            username: user._doc.username,
        };
        return {
            acces_token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map