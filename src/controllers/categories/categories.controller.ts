import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';

@Controller('categories')
export class CategoriesController {
  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return `product ${id}`;
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return {
      message: 'Se creó la categoría',
      payload,
    };
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return {
      message: 'Se editó la categoría',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
