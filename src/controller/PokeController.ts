import { request, Request, response, Response } from "express";
import type TypePoke from "../types/TypePoke";
import EnumType from "../enum/enumType";
import PokeRepository from "../repositories/PokeRepository";
import PokeEntity from "../entity/PokeEntity";

let pokeList: TypePoke[] = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PokeController {
  constructor(private repository: PokeRepository) {}

  createPoke(req: Request, res: Response) {
    const { name, type, adopted, age, birthDate } = <PokeEntity>req.body;
    if (!Object.values(EnumType).includes(type)) {
      return res.status(400).json({ error: "Tipo invalido" });
    }
    const newPoke = new PokeEntity();
    (newPoke.id = geraId()),
      (newPoke.name = name),
      (newPoke.type = type),
      (newPoke.adopted = adopted),
      (newPoke.age = age),
      (newPoke.birthDate = birthDate),
      this.repository.createPoke(newPoke);
    return res.status(201).json(newPoke);
  }

  listPoke(_req: Request, res: Response) {
    return res.status(200).json(pokeList);
  }

  AttPoke(req: Request, res: Response) {
    const { id } = req.params;
    const { name, type, adopted, age, birthDate } = req.body as TypePoke;
    const poke = pokeList.find((poke) => poke.id === Number(id));
    if (!poke) {
      return res.status(404).json({ erro: "Pokemon não encontrado" });
    }

    poke.name = name;
    poke.age = age;
    poke.type = type;
    poke.adopted = adopted;
    poke.birthDate = birthDate;
    return res.status(200).json(poke);
  }

  deletePoke(req: Request, res: Response) {
    const { id } = req.params;
    const poke = pokeList.find((poke) => poke.id === Number(id));
    if (!poke) {
      return res.status(404).json({ error: "Pokemon não encontrado" });
    }
    const index = pokeList.indexOf(poke);
    pokeList.splice(index, 1);
    return res.status(200).json({ mesage: "Pokemon deletado com sucesso" });
  }
}
