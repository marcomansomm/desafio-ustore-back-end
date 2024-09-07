import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productsProviders } from './providers/product.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ProductRepository } from './repositories/product.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ...productsProviders],
})
export class ProductModule {}
