import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumType from "../enum/enumType";

@Entity()
export default class PokeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  type: EnumType;
  @Column()
  age: number;
  @Column()
  birthDate: Date;
  @Column()
  adopted: boolean;
}
