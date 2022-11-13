import { Injectable } from '@nestjs/common';
import { OrdersRepository } from 'src/infra/database/typeorm/repositories/orders/ordersRepositories';

@Injectable()
export class ListAllOrdersService {
  constructor(private orderRepository: OrdersRepository) {}

  async execute() {
    const order = await this.orderRepository.ListAll();
    return order;
  }
}
