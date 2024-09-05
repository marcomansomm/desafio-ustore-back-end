import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    await this.productService.create(createProductDto);
    return {
      statusCode: 201,
      message: 'Produto Criado com sucesso!',
    };
  }

  @Get()
  async findAll() {
    const products = await this.productService.findAll();
    return {
      statusCode: 200,
      message: 'Produtos listados com sucesso!',
      data: products,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findOne(+id);
    return {
      statusCode: 200,
      message: 'Produto Encontrado com sucesso!',
      data: product,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    await this.productService.update(+id, updateProductDto);
    return {
      statusCode: 200,
      message: 'Produto Atualizado com sucesso!',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productService.remove(+id);
    return {
      statusCode: 200,
      message: 'Produto Deletado com sucesso!',
    };
  }
}
