import { CreateOrderDTO } from '../dtos/createOrderDTO';
import { UpdateOrderDTO } from '../dtos/updateOrderDTO';
import { Order } from '../entities/order';

export interface IorderRepository {
  create(data: CreateOrderDTO): Promise<Order>;
  ListAll(): Promise<Order[]>;
  update(id: string, data: UpdateOrderDTO): Promise<Order>;
  findById(id: string): Promise<Order>;
  delete(id: string): Promise<any>;
}
