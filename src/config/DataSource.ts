import { DataSource } from "typeorm";
import PokeEntity from "../entity/PokeEntity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [PokeEntity],
  synchronize: true
});
