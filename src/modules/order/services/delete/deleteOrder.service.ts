import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from 'src/infra/database/typeorm/repositories/order/orderRepositories';
import { Order } from '../../entities/order';

@Injectable()
export class DeleteOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string): Promise<Order> {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return await this.orderRepository.delete(id);
  }
}
