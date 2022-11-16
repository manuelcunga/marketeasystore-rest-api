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
import { UpdateOrderDTO } from '../../dtos/updateOrderDTO';
import { UpdateOrderService } from '../../services/update/updateService.service';

@UseGuards(AuthGuard('jwt'))
@Controller('order')
export class UpdateOrderController {
  constructor(private readonly orderService: UpdateOrderService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateOrderDTO) {
    return this.orderService.execute(id, data);
  }
}
