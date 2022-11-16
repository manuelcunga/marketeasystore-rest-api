import {
  Controller,
  Delete,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteProductService } from '../../services/delete/deleteProduct.service';

@UseGuards(AuthGuard('jwt'))
@Controller('product')
export class DeleteProductController {
  constructor(private readonly productService: DeleteProductService) {}

  @UsePipes(ValidationPipe)
  @Delete(':id')
  async handle(@Param('id') id: string) {
    return this.productService.execute(id);
  }
}
