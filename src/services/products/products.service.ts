import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../../dtos/proucts.dtos';

@Injectable()
export class ProductsService {
  //Se va a crear una array ptivado de productos para manejar los datos localmente, próximamente se añadiá una manera de conectar los servicios a una base de datos
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Esta es la descripción del producto',
      price: 123,
      stock: 1,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this, this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const prod = this.findOne(id);
    if (prod) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...prod,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    this.products.splice(index, 1);
    return {
      id: id,
      status: 'succes',
    };
  }
}
