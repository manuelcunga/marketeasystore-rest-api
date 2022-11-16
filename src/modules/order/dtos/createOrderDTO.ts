import { IsNotEmpty } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  total_price: string;

  @IsNotEmpty()
  product: string;
}
