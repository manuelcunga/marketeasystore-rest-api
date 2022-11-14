import { Products } from 'src/modules/products/entities/products';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Orders')
export class Orders {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  total_price: string;

  @OneToMany(() => Products, (products) => products.orders)
  product_list: Products[];

  @Column()
  id_product: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
