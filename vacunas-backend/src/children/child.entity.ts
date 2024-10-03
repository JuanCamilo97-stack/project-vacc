import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Municipality } from '../municipalities/municipality.entity';
import { Vaccine } from '../vaccines/vaccine.entity';

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  identificationNumber: string;

  @Column()
  gender: string;

  @Column()
  birthDate: Date;

  @ManyToOne(() => Municipality, (municipality) => municipality.children)
  municipality: Municipality;

  @ManyToMany(() => Vaccine, (vaccine) => vaccine.children, { eager: true }) 
  vaccines: Vaccine[];
}
