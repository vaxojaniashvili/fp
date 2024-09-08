import { CommentService } from './comment.service';
import { CreateCommentDTO, UpdateCommentDTO } from './dto/create-comment-dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    create(res: any, createCommentDTO: CreateCommentDTO): Promise<Comment>;
    findAll(res: any): Promise<Comment[]>;
    findbyId(res: any, commentID: string): Promise<Comment>;
    update(res: any, commentID: string, updateCommentDTO: UpdateCommentDTO): Promise<Comment>;
    delete(res: any, userID: string): Promise<Comment>;
}
