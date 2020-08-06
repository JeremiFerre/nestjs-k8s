import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Hello {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    value: string;
}