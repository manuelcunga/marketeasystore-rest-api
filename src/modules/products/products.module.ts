import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from 'src/infra/database/typeorm/repositories/products/productsRepositories';
import { UserModule } from '../accounts/user.module';
import { CreateProductController } from './controller/create/createOrder.controller';
import { DeleteProductController } from './controller/delete/deleteproduct.controller';
import { ListAllProductController } from './controller/listAll/listAllProducts.controller';
import { UpdateProductController } from './controller/update/updateProduct.controller';

import { Products } from './entities/products';
import { CreateProductService } from './services/create/createProduct';
import { DeleteProductService } from './services/delete/deleteProduct.service';
import { ListAllProductService } from './services/listAll/listallProducts.service';
import { UpdateProductService } from './services/update/updateService.service';

@Module({
  controllers: [
    CreateProductController,
    ListAllProductController,
    DeleteProductController,
    UpdateProductController,
  ],
  providers: [
    CreateProductService,
    ListAllProductService,
    DeleteProductService,
    UpdateProductService,
    ProductsRepository,
  ],

  imports: [TypeOrmModule.forFeature([Products]), UserModule],

  exports: [TypeOrmModule],
})
export class ProductModule {}
