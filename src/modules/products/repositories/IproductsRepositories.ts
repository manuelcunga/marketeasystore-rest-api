import { CreateProducts } from '../dtos/createProductsDTO';
import { UpdateProductsDTO } from '../dtos/updateProductsDTO';
import { Products } from '../entities/products';

export interface IProductsRepository {
  create(data: CreateProducts): Promise<Products>;
  findByName(name: string): Promise<Products>;
  ListAll(): Promise<Products[]>;
  update(id: string, data: UpdateProductsDTO): Promise<Products>;
  findById(id: string): Promise<Products>;
  delete(id: string): Promise<any>;
}
