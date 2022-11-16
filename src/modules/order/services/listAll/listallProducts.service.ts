import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/infra/database/typeorm/repositories/order/orderRepositories';

@Injectable()
export class ListAllOrderService {
  constructor(private orderRepo: OrderRepository) {}

  async execute() {
    const order = await this.orderRepo.ListAll();
    return order;
  }
}
