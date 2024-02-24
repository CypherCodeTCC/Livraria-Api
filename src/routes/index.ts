import { Router } from "express";

// Rotas
import booksRoute from "./allRoutes/booksRoute";
import genresRoute from "./allRoutes/genresRoute";
import authorsRoute from "./allRoutes/authorsRoute";

const routes: Router[] = [booksRoute, genresRoute, authorsRoute];

export default routes;
