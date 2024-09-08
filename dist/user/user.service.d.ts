/// <reference types="multer" />
import { Model } from 'mongoose';
import { UpdateUserDTO } from './dto/register-user.dto';
import { User } from './interfaces/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    UploadAvatarToCloudinary(file: Express.Multer.File): Promise<void>;
    findOne(username: string): Promise<User>;
    private hashPassword;
    findAll(): Promise<User[]>;
    findUserById(userID: string): Promise<User>;
    updateUser(userID: string, updateUserDTO: UpdateUserDTO): Promise<User>;
    deleteUSer(userID: string): Promise<User>;
}
