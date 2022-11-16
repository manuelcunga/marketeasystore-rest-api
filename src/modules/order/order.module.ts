import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/infra/database/typeorm/repositories/order/orderRepositories';
import { UserModule } from '../accounts/user.module';
import { CreateOrderController } from './controller/create/createOrder.controller';
import { DeleteOrderController } from './controller/delete/deleteOrder.controller';
import { ListAllOrderController } from './controller/listAll/listAllOrder.controller';
import { UpdateOrderController } from './controller/update/updateOrder.controller';
import { Order } from './entities/order';
import { CreateOrderService } from './services/create/createOrder.service';
import { DeleteOrderService } from './services/delete/deleteOrder.service';
import { ListAllOrderService } from './services/listAll/listallProducts.service';
import { UpdateOrderService } from './services/update/updateService.service';

@Module({
  controllers: [
    CreateOrderController,
    ListAllOrderController,
    UpdateOrderController,
    DeleteOrderController,
  ],
  providers: [
    CreateOrderService,
    ListAllOrderService,
    UpdateOrderService,
    DeleteOrderService,
    OrderRepository,
  ],

  imports: [TypeOrmModule.forFeature([Order]), UserModule],

  exports: [TypeOrmModule],
})
export class OrderModule {}
