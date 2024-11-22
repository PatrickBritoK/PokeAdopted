import PokeEntity from "../../entity/PokeEntity";

export default interface InterfacePokeRepository {
  createPoke(poke: PokeEntity): void;
  pokeList(): Array<PokeEntity>;
  AttPoke(id: number, poke: PokeEntity): void;
  deletePoke(id: number, poke: PokeEntity): void;
}
