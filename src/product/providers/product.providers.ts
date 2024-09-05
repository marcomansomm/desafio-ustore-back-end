import { Product } from '../models/product.model';

export const productsProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];