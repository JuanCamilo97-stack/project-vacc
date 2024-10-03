import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Municipality } from '../municipality.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Municipality, (municipality) => municipality.department)
  municipalities: Municipality[];
}