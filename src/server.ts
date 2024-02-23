import express, { Express } from "express";
import dotenv from "dotenv";

import UseRoutes from "./helpers/UseRoutes";
import routes from "./routes";

dotenv.config();
const app: Express = express();

// using routes
const useRoutes = new UseRoutes(app);
useRoutes.use(routes);

app.use(express.json()); // permitindo json no express

export default app;
