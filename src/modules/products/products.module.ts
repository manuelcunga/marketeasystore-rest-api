import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateProductController } from './controller/create/createMovie.controller';
import { DeleteProductController } from './controller/delete/deleteproduct.controller';
import { ListAllProductController } from './controller/listAll/listAllProducts.controller';
import { UpdateProductController } from './controller/update/updateProduct.controller';

import { Products } from './entities/products';
import { CreateProductService } from './services/create/createProduct';
import { DeleteProductService } from './services/delete/deleteProduct.service';
import { ListAllProductService } from './services/listAll/listallProducts.service';
import { UpdateProductService } from './services/update/updateProduct.service';

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
  ],

  imports: [TypeOrmModule.forFeature([Products])],

  exports: [TypeOrmModule],
})
export class ProductModule {}
