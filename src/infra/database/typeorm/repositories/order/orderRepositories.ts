import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IorderRepository } from 'src/modules/order/repositories/IorderRepositories';
import { Order } from 'src/modules/order/entities/order';
import { CreateOrderDTO } from 'src/modules/order/dtos/createOrderDTO';
import { UpdateOrderDTO } from 'src/modules/order/dtos/updateOrderDTO';

@Injectable()
export class OrderRepository implements IorderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly ormRepository: Repository<Order>,
  ) {}

  public async create(data: CreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(data);
    await this.ormRepository.save(order);
    return order;
  }

  public async ListAll(): Promise<Order[]> {
    const order = await this.ormRepository.find();
    return order;
  }

  public async update(id: string, data: UpdateOrderDTO): Promise<Order> {
    const order = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(order);
  }

  public async findById(id: string): Promise<Order> {
    const order = await this.ormRepository.findOne({ where: { id } });
    return order;
  }

  public async delete(id: string): Promise<any> {
    return await this.ormRepository.delete(id);
  }
}
