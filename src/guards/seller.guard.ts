import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class SellerGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user.seller) {
      return true;
    }

    throw new HttpException(
      'not found',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
