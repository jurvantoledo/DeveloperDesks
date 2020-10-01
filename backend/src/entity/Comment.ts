import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Desk } from "./Desk";
import { Developer } from "./Developer";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(type => Desk, desk => desk.comments)
  desk: Desk;

  @ManyToOne(type => Developer, developer => developer.comments)
  author: Developer;
}
