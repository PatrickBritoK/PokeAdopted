import express, { Router } from "express";
import pokeRouter from "../routes/PokeRouter"

const router = (app: express.Router) => {
    app.use("/pokes", pokeRouter);
};

export default router;
