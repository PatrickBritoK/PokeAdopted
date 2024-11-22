import express from "express";
import PokeController from "../controller/PokeController";
import PokeRepository from "../repositories/PokeRepository";
import { AppDataSource } from "../config/DataSource";

const router = express.Router();
const pokeRepository = new PokeRepository(
  AppDataSource.getRepository("PokeEntity")
);

const pokeController = new PokeController(pokeRepository);

router.post("/", pokeController.createPoke.bind(pokeController));
router.get("/", pokeController.listPoke.bind(pokeController));
router.put("/:id", pokeController.AttPoke.bind(pokeController));
router.delete("/:id", pokeController.deletePoke.bind(pokeController));

export default router;
