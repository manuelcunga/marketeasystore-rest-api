import { CreateOrdersDTO } from '../dtos/createOrdersDTO';
import { UpdateOrdersDTO } from '../dtos/updateOrdersDTO';
import { Orders } from '../entities/orders';

export interface IOrdersRepository {
  create(data: CreateOrdersDTO): Promise<Orders>;
  ListAll(): Promise<Orders[]>;
  update(id: string, data: UpdateOrdersDTO): Promise<Orders>;
  findById(id: string): Promise<Orders>;
}
