import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Desk } from "./Desk";
import { Comment } from "./Comment";

@Entity()
export class Developer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName!: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(type => Desk, desk => desk.developer)
  desks: Desk[];

  @OneToMany(type => Comment, desk => desk.author)
  comments: Comment[];
}
