import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Child } from '../children/child.entity';

@Entity()
export class Vaccine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  maxAge: number;

  @ManyToMany(() => Child, (child) => child.vaccines)
  children: Child[];
}