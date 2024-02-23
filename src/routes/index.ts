import { Router } from "express";

// Rotas
import booksRoute from "./allRoutes/booksRoute";
import genreRoute from "./allRoutes/genreRoute";

const routes: Router[] = [booksRoute, genreRoute];

export default routes;
