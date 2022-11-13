import {
  Controller,
  Param,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteProductService } from '../../services/delete/deleteProduct.service';

@UseGuards(AuthGuard('jwt'))
@Controller('products')
export class DeleteProductController {
  constructor(private readonly productService: DeleteProductService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string) {
    return this.productService.execute(id);
  }
}
