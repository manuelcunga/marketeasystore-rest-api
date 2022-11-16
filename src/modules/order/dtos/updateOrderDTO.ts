import { IsNotEmpty } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  total_price: string;

  @IsNotEmpty()
  product: string;
}
