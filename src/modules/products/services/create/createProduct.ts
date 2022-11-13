import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductsRepository } from 'src/infra/database/typeorm/repositories/products/productsRepositories';
import { CreateProducts } from '../../dtos/createProductsDTO';

@Injectable()
export class CreateProductService {
  constructor(private productRepository: ProductsRepository) {}

  async execute(data: CreateProducts) {
    const alreadyProduct = await this.productRepository.findByName(data.name);

    if (alreadyProduct) {
      throw new BadRequestException('product already exits');
    }

    return await this.productRepository.create(data);
  }
}
