/// <reference types="multer" />
import { UpdateUserDTO } from './dto/register-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    uploadAvatar(file: Express.Multer.File): Promise<void>;
    findAll(res: any): Promise<User[]>;
    findById(res: any, userID: any): Promise<User>;
    update(res: any, userID: any, updateUserDTO: UpdateUserDTO): Promise<User>;
    delete(res: any, userID: string): Promise<User>;
}
