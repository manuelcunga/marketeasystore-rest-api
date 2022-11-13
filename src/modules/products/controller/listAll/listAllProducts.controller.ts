import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListAllProductService } from '../../services/listAll/listallProducts.service';

// @UseGuards(AuthGuard('jwt'))
@Controller('movies')
export class ListAllProductController {
  constructor(private readonly productService: ListAllProductService) {}

  @Get('/')
  async handle() {
    return await this.productService.execute();
  }
}
