import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListAllOrdersService } from '../../services/listAll/listallOrders.service';

// @UseGuards(AuthGuard('jwt'))
@Controller('orders')
export class ListAllOrdersController {
  constructor(private readonly orderService: ListAllOrdersService) {}

  @Get('/')
  async handle() {
    return await this.orderService.execute();
  }
}
