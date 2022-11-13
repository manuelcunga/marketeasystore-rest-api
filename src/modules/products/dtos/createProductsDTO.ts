import { IsNotEmpty } from 'class-validator';

export class CreateProducts {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  id_user: string;

  @IsNotEmpty()
  category: string;
}
