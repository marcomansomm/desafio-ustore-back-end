import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly describe: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;

  @IsNotEmpty()
  @IsDateString()
  readonly expiry_date: string;
}
