export declare class CreateCommentDTO {
    productID: string;
    comment: string;
    userID: string;
}
export declare type UpdateCommentDTO = Partial<CreateCommentDTO>;
