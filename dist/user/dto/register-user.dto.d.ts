export declare class RegisterUserDTO {
    username: string;
    password: string;
    email: string;
    isEmailConfirmed: boolean;
}
export declare type UpdateUserDTO = Partial<RegisterUserDTO>;
