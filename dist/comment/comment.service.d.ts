import { Model } from 'mongoose';
import { CreateCommentDTO, UpdateCommentDTO } from './dto/create-comment-dto';
import { Comment } from './interfaces/comment.interface';
export declare class CommentService {
    private commentModel;
    constructor(commentModel: Model<Comment>);
    findAll(): Promise<Comment[]>;
    findById(id: string): Promise<Comment>;
    createComment(createCommentDTO: CreateCommentDTO): Promise<Comment>;
    updateComment(commentID: string, updateCommentDTO: UpdateCommentDTO): Promise<Comment>;
    deleteComment(userID: string): Promise<Comment>;
}
