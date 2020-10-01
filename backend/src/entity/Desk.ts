import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Developer } from "./Developer";
import { Comment } from "./Comment";

@Entity()
export class Desk extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: false })
  uri: string;

  @Column({ nullable: true })
  lat?: number;

  @Column({ nullable: true })
  lng?: number;

  @ManyToOne(type => Developer, developer => developer.desks)
  developer: Developer;

  @OneToMany(type => Comment, desk => desk.author)
  comments: Comment[];
}
