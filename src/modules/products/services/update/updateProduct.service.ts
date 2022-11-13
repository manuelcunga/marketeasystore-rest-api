import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from 'src/infra/database/typeorm/repositories/products/productsRepositories';
import { UpdateProductsDTO } from '../../dtos/updateProductsDTO';
import { Products } from '../../entities/products';

@Injectable()
export class UpdateProductService {
  constructor(private productRepository: ProductsRepository) {}

  async execute(id: string, data: UpdateProductsDTO): Promise<Products> {
    const product = await this.productRepository.update(id, data);

    if (!product) {
      throw new NotFoundException(`Product not found!`);
    }

    return product;
  }
}
