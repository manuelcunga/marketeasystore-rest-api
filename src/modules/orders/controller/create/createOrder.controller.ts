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
import { CreateOrdersDTO } from '../../dtos/createOrdersDTO';
import { CreateOrderService } from '../../services/create/createOrder';

@UseGuards(AuthGuard('jwt'))
@Controller('order')
export class CreateOrderController {
  constructor(private readonly createOrderService: CreateOrderService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateOrdersDTO) {
    return await this.createOrderService.execute(data);
  }
}
