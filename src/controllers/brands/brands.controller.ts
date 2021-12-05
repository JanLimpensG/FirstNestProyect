import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `category ${id}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creó la marca',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'Se editó la marca',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
