import {
  Controller,
  Delete,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteOrderService } from '../../services/delete/deleteOrder.service';

@UseGuards(AuthGuard('jwt'))
@Controller('order')
export class DeleteOrderController {
  constructor(private readonly deleteOrderService: DeleteOrderService) {}

  @UsePipes(ValidationPipe)
  @Delete(':id')
  async handle(@Param('id') id: string) {
    return this.deleteOrderService.execute(id);
  }
}
