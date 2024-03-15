// Server configs

// Imports Libs
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

// Imports Modules
import UseRoutes from "./helpers/UseRoutes";
import routes from "./routes";

dotenv.config();
const app: Express = express();

app.use(express.urlencoded({ extended: true })); // permitindo o recebimento de parâmetros
app.use(express.json()); // permitindo json no express
app.use(cors());

// usando rotas
const useRoutes = new UseRoutes(app);
useRoutes.use(routes);

export default app;
