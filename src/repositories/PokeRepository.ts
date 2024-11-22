import { Repository } from "typeorm";
import PokeEntity from "../entity/PokeEntity";
import InterfacePokeRepository from "./interfaces/InterfacePokeRepository";

export default class PokeRepository implements InterfacePokeRepository {
  private repository: Repository<PokeEntity>;

  constructor(repository: Repository<PokeEntity>) {
    this.repository = repository;
  }

  createPoke(poke: PokeEntity): void {
    this.repository.save(poke)
  }
  pokeList(): Array<PokeEntity> {
    throw new Error("Method not implemented.");
  }
  AttPoke(id: number, poke: PokeEntity): void {
    throw new Error("Method not implemented.");
  }
  deletePoke(id: number, poke: PokeEntity): void {
    throw new Error("Method not implemented.");
  }
}
