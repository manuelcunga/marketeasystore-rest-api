import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
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

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
