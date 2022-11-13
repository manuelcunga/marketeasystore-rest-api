import { Injectable } from '@nestjs/common';
import { ProductsRepository } from 'src/infra/database/typeorm/repositories/products/productsRepositories';

@Injectable()
export class ListAllProductService {
  constructor(private productRepository: ProductsRepository) {}

  async execute() {
    const products = await this.productRepository.ListAll();
    return products;
  }
}
