import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
// Al usar el Response, se puede manejar la respuesta como si lo hicieras en Express, no es recomenrando, pero se puede hacer

@Controller('products')
export class ProductsController {
  @Get(':productId')
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `product ${productId}`,
    });
  }
  @Get()
  getProducts(
    @Res() response: Response,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    response.status(200).send({
      message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    });
  }
  @Get('filter')
  getProductFilter(@Res() response: Response) {
    response.status(200).send(`Yo soy un filter`);
  }

  @Post()
  create(@Res() response: Response, @Body() payload: any) {
    response.status(200).send({
      message: 'acción de crear',
      payload,
    });
  }

  @Put(':id')
  update(
    @Res() response: Response,
    @Param('id') id: number,
    @Body() payload: any,
  ) {
    response.status(200).send({
      id,
      payload,
    });
  }

  @Delete(':id')
  delete(@Res() response: Response, @Param('id') id: number) {
    response.status(200).send(`id: ${id}`);
  }
}
