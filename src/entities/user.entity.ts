import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wheel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  size: number;
}
