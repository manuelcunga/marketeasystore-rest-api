import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateOrderController } from './controller/create/createOrder.controller';
import { DeleteOrderController } from './controller/delete/deleteOrder.controller';
import { ListAllOrdersController } from './controller/listAll/listAllOrders.controller';
import { UpdateOrderController } from './controller/update/updateOrder.controller';
import { Orders } from './entities/orders';
import { CreateOrderService } from './services/create/createOrder';
import { DeleteOrderService } from './services/delete/deleteOrder.service';
import { ListAllOrdersService } from './services/listAll/listallOrders.service';
import { UpdateOrderService } from './services/update/updateOrder.service';

@Module({
  controllers: [
    CreateOrderController,
    UpdateOrderController,
    ListAllOrdersController,
    DeleteOrderController,
  ],
  providers: [
    CreateOrderService,
    ListAllOrdersService,
    UpdateOrderService,
    DeleteOrderService,
  ],

  imports: [TypeOrmModule.forFeature([Orders])],

  exports: [TypeOrmModule],
})
export class OrdersModule {}
