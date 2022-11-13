import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from 'src/infra/database/typeorm/repositories/orders/ordersRepositories';
import { UpdateOrdersDTO } from '../../dtos/updateOrdersDTO';
import { Orders } from '../../entities/orders';

@Injectable()
export class UpdateOrderService {
  constructor(private orderRepository: OrdersRepository) {}

  async execute(id: string, data: UpdateOrdersDTO): Promise<Orders> {
    const order = await this.orderRepository.update(id, data);

    if (!order) {
      throw new NotFoundException(`Order not found!`);
    }

    return order;
  }
}
