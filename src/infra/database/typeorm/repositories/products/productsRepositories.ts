import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProducts } from 'src/modules/products/dtos/createProductsDTO';
import { Products } from 'src/modules/products/entities/products';
import { UpdateProductsDTO } from 'src/modules/products/dtos/updateProductsDTO';
import { IProductsRepository } from 'src/modules/products/repositories/IproductsRepositories';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsRepository implements IProductsRepository {
  constructor(
    @InjectRepository(Products)
    private readonly ormRepository: Repository<Products>,
  ) {}

  public async create(data: CreateProducts): Promise<Products> {
    const product = this.ormRepository.create(data);
    await this.ormRepository.save(product);
    return product;
  }

  public async ListAll(): Promise<Products[]> {
    const products = await this.ormRepository.find();
    return products;
  }

  public async update(id: string, data: UpdateProductsDTO): Promise<Products> {
    const product = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(product);
  }

  public async findById(id: string): Promise<Products> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  public async delete(id: string): Promise<any> {
    return await this.ormRepository.softDelete({ id });
  }

  public async findByName(name: string) {
    return await this.ormRepository.findOne({ where: { name } });
  }
}
