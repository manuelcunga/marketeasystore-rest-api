import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/accounts/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/products/products.module';
import { dataSourceOptions } from './infra/database/typeorm/data-source';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ProductModule,
    OrderModule,
  ],
  providers: [],
})
export class AppModule {}
