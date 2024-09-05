import { Sequelize } from 'sequelize-typescript';
import { Product } from '../product/entities/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'desafio_ustore',
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];