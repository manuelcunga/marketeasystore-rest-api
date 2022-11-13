import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from 'src/infra/database/typeorm/repositories/products/productsRepositories';
import { Products } from '../../entities/products';

@Injectable()
export class DeleteProductService {
  constructor(private productRepository: ProductsRepository) {}

  async execute(id: string): Promise<Products> {
    const product = await this.productRepository.delete(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
