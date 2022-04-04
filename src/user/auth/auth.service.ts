import { ConflictException, Injectable } from '@nestjs/common';
import { UserType } from '@prisma/client';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { PrismaService } from 'src/prisma/prisma.service';

import { SignupDto } from './dtos/auth.dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly bcryptService: BcryptService,
  ) {}
  async signup(body: SignupDto) {
    const { email, password, name, phone } = body;
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      throw new ConflictException({
        error: 'Email already exists',
      });
    }
    const hashedPassword: string = await this.bcryptService.hashPassword(
      password,
    );
    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        phone,
        password: hashedPassword,
        userType: UserType.BUYER,
      },
    });
    return user;
  }
}
