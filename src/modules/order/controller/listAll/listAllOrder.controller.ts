import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListAllOrderService } from '../../services/listAll/listallProducts.service';

@UseGuards(AuthGuard('jwt'))
@Controller('orders')
export class ListAllOrderController {
  constructor(private readonly orderService: ListAllOrderService) {}

  @Get('/')
  async handle() {
    return await this.orderService.execute();
  }
}
