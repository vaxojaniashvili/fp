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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const comment_service_1 = require("./comment.service");
const create_comment_dto_1 = require("./dto/create-comment-dto");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async create(res, createCommentDTO) {
        try {
            const comment = await this.commentService.createComment(createCommentDTO);
            return res.json({
                message: 'Comment created successfully',
                comment,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll(res) {
        try {
            const comments = await this.commentService.findAll();
            return res.json({
                message: 'Comments obtained successfully',
                comments,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findbyId(res, commentID) {
        try {
            const comment = await this.commentService.findById(commentID);
            return res.json({
                message: 'Comment obtained successfully',
                comment,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(res, commentID, updateCommentDTO) {
        try {
            const comment = await this.commentService.updateComment(commentID, updateCommentDTO);
            console.log(comment);
            return res.json({
                message: 'Comment update successfully',
                comment,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(res, userID) {
        try {
            const comment = await this.commentService.deleteComment(userID);
            return res.json({
                message: 'Comment removed successfully',
                comment,
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
    __metadata("design:paramtypes", [Object, create_comment_dto_1.CreateCommentDTO]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':commentID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('commentID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findbyId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':commentID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('commentID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':commentID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('commentID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "delete", null);
CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map