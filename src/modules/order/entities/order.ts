import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('orders')
export class Order {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  total_price: string;

  @Column()
  product: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
