import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class BcryptService {
  async hashPassword(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, 10);
    } catch (error) {
      console.log(error);
    }
  }
}
