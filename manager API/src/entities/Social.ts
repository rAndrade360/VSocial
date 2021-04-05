import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'socials' })
export default class Stop {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}
