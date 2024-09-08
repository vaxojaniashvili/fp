import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { RegisterUserDTO } from 'src/user/dto/register-user.dto';
import { User } from 'src/user/schemas/user.schema';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly userModel;
    private userService;
    private jwtService;
    constructor(userModel: Model<User>, userService: UserService, jwtService: JwtService);
    registerUser(registerUserDTO: RegisterUserDTO): Promise<User>;
    private hashPassword;
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        acces_token: string;
    }>;
}
