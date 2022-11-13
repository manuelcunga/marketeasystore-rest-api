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
import { UpdateOrdersDTO } from '../../dtos/updateOrdersDTO';
import { UpdateOrderService } from '../../services/update/updateOrder.service';

@UseGuards(AuthGuard('jwt'))
@Controller('order')
export class UpdateOrderController {
  constructor(private readonly orderService: UpdateOrderService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateOrdersDTO) {
    return this.orderService.execute(id, data);
  }
}
