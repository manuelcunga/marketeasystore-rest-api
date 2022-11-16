import {
  Body,
  Controller,
  Param,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateProductsDTO } from '../../dtos/updateProductsDTO';
import { UpdateProductService } from '../../services/update/updateService.service';

@UseGuards(AuthGuard('jwt'))
@Controller('product')
export class UpdateProductController {
  constructor(private readonly productService: UpdateProductService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateProductsDTO) {
    return this.productService.execute(id, data);
  }
}
