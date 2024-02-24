import { Router } from "express";

// Rotas
import booksRoute from "./allRoutes/booksRoute";
import genresRoute from "./allRoutes/genresRoute";

const routes: Router[] = [booksRoute, genresRoute];

export default routes;
