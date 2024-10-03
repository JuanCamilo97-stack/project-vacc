import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Department } from './department/department.entity';
import { Child } from '../children/child.entity';

@Entity()
export class Municipality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Department, (department) => department.municipalities)
  department: Department;

  @OneToMany(() => Child, (child) => child.municipality)
  children: Child[];
}