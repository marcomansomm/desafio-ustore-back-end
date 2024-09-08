import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';
import { where } from 'sequelize';
import { ExpiryDate } from '../errors/expiry-date.error';
import {
  ProductPagination,
  ProductRepository,
} from './repositories/product.repository';
import { NotFound } from 'src/errors/not-found.error';

@Injectable()
export class ProductService {
  constructor(private productsRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const product = new Product();
      product.describe = createProductDto.describe;
      product.price = createProductDto.price;
      product.quantity = createProductDto.quantity;
      product.expiry_date = createProductDto.expiry_date
        ? new Date(createProductDto.expiry_date)
        : null;

      if (!product.expiry_date) {
        throw new ExpiryDate(
          'Não é possivel cadastrar um produto sem data de validade',
        );
      }

      if (this.checkExpiryDate(product.expiry_date)) {
        throw new ExpiryDate('Não é possivel cadastrar um produto vencido');
      }

      const productData = await this.productsRepository.create(product);
      return productData;
    } catch (error) {
      throw error;
    }
  }

  async findAll(queryFilters: ProductPagination): Promise<{
    totalItems: number;
    totalPages: number;
    currentPage: number;
    products: Product[];
  }> {
    try {
      return await this.productsRepository.findAll(queryFilters);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Product> {
    try {
      const product = await this.productsRepository.findOne(id);

      if (!product) {
        throw new NotFound('Produto não encontrado');
      }

      return await this.productsRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productsRepository.findOne(id);

      if (!product) {
        throw new NotFound('Produto não encontrado');
      }

      if (this.checkExpiryDate(new Date(updateProductDto.expiry_date))) {
        throw new ExpiryDate('Não é possivel atualizar um produto vencido');
      }

      return this.productsRepository.update(id, updateProductDto);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOne(id);

    if (!product) {
      throw new NotFound('Produto não encontrado');
    }

    return this.productsRepository.remove(id);
  }

  checkExpiryDate(expiry_date: Date) {
    return expiry_date < new Date();
  }
}
