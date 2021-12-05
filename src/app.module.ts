import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';
import { CustomersService } from './services/customers/customers.service';
import { OrdersService } from './services/orders/orders.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    CustomersController,
    OrdersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    BrandsService,
    CustomersService,
    OrdersService,
  ],
})
export class AppModule {}
