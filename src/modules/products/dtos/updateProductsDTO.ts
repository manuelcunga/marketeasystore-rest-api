import { IsNotEmpty } from 'class-validator';

export class UpdateProductsDTO {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  price?: string;

  @IsNotEmpty()
  category?: string;
}
