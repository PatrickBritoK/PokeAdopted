import express, { Response } from "express";
import router from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./config/DataSource";

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((erro) => {
    console.log(erro);
  });

const app = express();
app.use(express.json());
router(app);

export default app;
