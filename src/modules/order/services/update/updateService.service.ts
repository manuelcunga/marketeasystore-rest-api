import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from 'src/infra/database/typeorm/repositories/order/orderRepositories';
import { UpdateOrderDTO } from '../../dtos/updateOrderDTO';
import { Order } from '../../entities/order';

@Injectable()
export class UpdateOrderService {
  constructor(private orderRepo: OrderRepository) {}

  async execute(id: string, data: UpdateOrderDTO): Promise<Order> {
    const order = await this.orderRepo.update(id, data);

    if (!order) {
      throw new NotFoundException(`Pedido não encontrado!`);
    }

    return order;
  }
}
