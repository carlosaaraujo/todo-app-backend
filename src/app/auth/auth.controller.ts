import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async login(
    @Request() req: AuthRequest,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.signin(req.user);

    response.cookie('Authentication', jwt, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 1000,
    });

    return { message: 'Login successful' };
  }
}
