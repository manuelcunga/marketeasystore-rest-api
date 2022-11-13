import { IsNotEmpty } from 'class-validator';

export class CreateOrdersDTO {
  @IsNotEmpty()
  total_price: string;

  @IsNotEmpty()
  product_list: [];

  @IsNotEmpty()
  id_product: string;
}
