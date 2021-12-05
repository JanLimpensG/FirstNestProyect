import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `customer ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creó el cliente',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'Se editó le customar',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
