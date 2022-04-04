import { Module } from '@nestjs/common';
import { BcryptModule } from 'src/bcrypt/bcrypt.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [PrismaModule, BcryptModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class UserModule {}
