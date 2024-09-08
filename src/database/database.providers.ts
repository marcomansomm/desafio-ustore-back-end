import { Sequelize } from 'sequelize-typescript';
import { Product } from '../product/models/product.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelizetest = {
        dialect: 'mysql',
        host: 'mysql-db',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'desafio_ustore',
      };

      console.log(sequelizetest);

      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'mysql-db',
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
