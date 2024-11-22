import express from "express";
import PokeController from "../controller/PokeController";

const router = express.Router();

const pokeController = new PokeController();

router.post("/", pokeController.createPoke.bind(pokeController));
router.get("/", pokeController.listPoke.bind(pokeController));
router.put("/:id", pokeController.AttPoke.bind(pokeController));
router.delete("/:id", pokeController.deletePoke.bind(pokeController));

export default router;
