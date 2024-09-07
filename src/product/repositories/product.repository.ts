import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../models/product.model';
import { where } from 'sequelize';
import { ExpiryDate } from '../../errors/expiry-date.error';

export interface ProductPagination {
  page: number;
  limit: number;
}

@Injectable()
export class ProductRepository {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productsRepository: typeof Product,
  ) {}

  async create(product: Product): Promise<Product> {
    try {
      return await product.save();
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
    console.log(queryFilters);
    try {
      const { page, limit } = queryFilters;
      const offset = page * limit - limit;

      const { count, rows } = await this.productsRepository.findAndCountAll({
        limit: parseInt(limit.toString()),
        offset: parseInt(offset.toString()),
      });

      return {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page.toString()),
        products: rows,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Product> {
    try {
      return await this.productsRepository.findOne({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateProduct: UpdateProductDto) {
    try {
      return this.productsRepository.update(updateProduct, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    return await this.productsRepository.destroy({
      where: { id },
    });
  }
}
