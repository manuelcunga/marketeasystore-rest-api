import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Orders')
export class Orders {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  total_price?: string;

  @Column()
  product_list?: [];

  @Column()
  id_product?: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
