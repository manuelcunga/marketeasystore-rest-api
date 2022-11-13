import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from 'src/modules/products/entities/products';
import { IOrdersRepository } from 'src/modules/orders/repositories/IOrdersRepositories';
import { Orders } from 'src/modules/orders/entities/orders';
import { CreateOrdersDTO } from 'src/modules/orders/dtos/createOrdersDTO';
import { UpdateOrdersDTO } from 'src/modules/orders/dtos/updateOrdersDTO';

@Injectable()
export class OrdersRepository implements IOrdersRepository {
  constructor(
    @InjectRepository(Products)
    private readonly ormRepository: Repository<Orders>,
  ) {}

  public async create(data: CreateOrdersDTO): Promise<Orders> {
    const order = this.ormRepository.create(data);
    await this.ormRepository.save(order);
    return order;
  }

  public async ListAll(): Promise<Orders[]> {
    const orders = await this.ormRepository.find();
    return orders;
  }

  public async update(id: string, data: UpdateOrdersDTO): Promise<Orders> {
    const order = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(order);
  }

  public async findById(id: string): Promise<Orders> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  public async delete(id: string): Promise<any> {
    return await this.ormRepository.softDelete({ id });
  }
}
