import {
  Controller,
  Param,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteOrderService } from '../../services/delete/deleteOrder.service';

@UseGuards(AuthGuard('jwt'))
@Controller('order')
export class DeleteOrderController {
  constructor(private readonly orderService: DeleteOrderService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string) {
    return this.orderService.execute(id);
  }
}
