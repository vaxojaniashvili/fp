import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/user/interfaces/user.interface';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: User, token: string): Promise<void>;
}
