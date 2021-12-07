import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './proucts.dtos';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateBrandDto extends PartialType(CreateProductDto) {}
