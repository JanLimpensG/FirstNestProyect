import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `orden ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creó la orden',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'Se editó la orden',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
