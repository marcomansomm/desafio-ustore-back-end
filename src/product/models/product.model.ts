import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'products'
})
export class Product extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: 'DECIMAL(10, 2)',
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expiry_date: Date;
}