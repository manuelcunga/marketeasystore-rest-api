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
import { CreateOrderDTO } from '../../dtos/createOrderDTO';
import { CreateOrderService } from '../../services/create/createOrder.service';

@UseGuards(AuthGuard('jwt'))
@Controller('order')
export class CreateOrderController {
  constructor(private readonly createOrderService: CreateOrderService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateOrderDTO) {
    return await this.createOrderService.execute(data);
  }
}
