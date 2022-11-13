import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateProducts } from '../../dtos/createProductsDTO';
import { CreateProductService } from '../../services/create/createProduct';

@UseGuards(AuthGuard('jwt'))
@Controller('products')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateProducts) {
    return await this.createProductService.execute(data);
  }
}
