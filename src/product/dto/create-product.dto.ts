import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
    
    @IsNotEmpty()
    @IsDateString()
    readonly expiry_date: string;
}
