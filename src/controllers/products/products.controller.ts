import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    };
  }
  @Get('filter')
  getProductFilter() {
    return `Yo soy un filter`;
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
}
