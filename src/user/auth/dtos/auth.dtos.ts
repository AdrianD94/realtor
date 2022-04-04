import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @Matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/g, {
    message: 'phone must be a valid phone number',
  })
  phone: string;

  @IsString()
  @MinLength(5)
  password: string;
}
