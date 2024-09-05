import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { where } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productsRepository: typeof Product
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    const productData = await product.save();
    return productData;
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.findAll<Product>();
  }

  findOne(id: number) {
    return this.productsRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(updateProductDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.productsRepository.destroy({
      where: { id },
    });
  }
}
