import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../../../../../src/infra/database/typeorm/repositories/orders/ordersRepositories';
import { CreateOrdersDTO } from '../../dtos/createOrdersDTO';

@Injectable()
export class CreateOrderService {
  constructor(private orderRepository: OrdersRepository) {}

  async execute(data: CreateOrdersDTO) {
    return await this.orderRepository.create(data);
  }
}
