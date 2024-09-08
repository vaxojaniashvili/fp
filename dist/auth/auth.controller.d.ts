import { RegisterUserDTO } from 'src/user/dto/register-user.dto';
import { User } from 'src/user/schemas/user.schema';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(res: any, registerUserDTO: RegisterUserDTO): Promise<User>;
    login(res: any, req: any): Promise<any>;
}
