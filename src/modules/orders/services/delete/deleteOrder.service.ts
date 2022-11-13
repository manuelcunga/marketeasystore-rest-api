import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from 'src/infra/database/typeorm/repositories/orders/ordersRepositories';
import { Orders } from '../../entities/orders';

@Injectable()
export class DeleteOrderService {
  constructor(private orderRepository: OrdersRepository) {}

  async execute(id: string): Promise<Orders> {
    const order = await this.orderRepository.delete(id);

    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
}
