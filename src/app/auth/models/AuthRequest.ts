import { Request } from 'express';
import { UserEntity } from 'src/app/user/entity/user.entity';

export interface AuthRequest extends Request {
  user: UserEntity;
}
