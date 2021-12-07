import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
