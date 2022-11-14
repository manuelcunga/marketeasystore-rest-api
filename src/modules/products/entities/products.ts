import { Orders } from 'src/modules/orders/entities/orders';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Products')
export class Products {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  category: string;

  @ManyToOne(() => Orders, (orders) => orders.product_list)
  orders: Orders;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
