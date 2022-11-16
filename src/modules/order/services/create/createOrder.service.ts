import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/infra/database/typeorm/repositories/order/orderRepositories';
import { CreateOrderDTO } from '../../dtos/createOrderDTO';

@Injectable()
export class CreateOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(data: CreateOrderDTO) {
    return await this.orderRepository.create(data);
  }
}
