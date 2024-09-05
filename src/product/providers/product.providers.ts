import { Product } from '../entities/product.entity';

export const productsProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];