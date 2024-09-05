import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';
import { where } from 'sequelize';
import { ExpiryDate } from '../errors/expiry-date.error';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productsRepository: typeof Product
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const product = new Product();
      product.name = createProductDto.name;
      product.price = createProductDto.price;
      product.expiry_date = createProductDto.expiry_date ? new Date(createProductDto.expiry_date) : null;
      
      if(!product.expiry_date) {
        throw new ExpiryDate('Não é possivel cadastrar um produto sem data de validade');
      }

      if(this.checkExpiryDate(product.expiry_date)) {
        throw new ExpiryDate('Não é possivel cadastrar um produto vencido');
      }
      
      const productData = await product.save();
      return productData;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      return await this.productsRepository.findAll<Product>();
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

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      if(this.checkExpiryDate(new Date(updateProductDto.expiry_date))) {
        throw new ExpiryDate('Não é possivel atualizar um produto vencido');
      } 

      return this.productsRepository.update(updateProductDto, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
    
  }

  remove(id: number) {
    return this.productsRepository.destroy({
      where: { id },
    });
  }

  checkExpiryDate(expiry_date: Date) {
    return expiry_date < new Date();
  }
}
