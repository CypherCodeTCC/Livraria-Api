import { Router } from "express";

// Rotas
import booksRoute from "./allRoutes/booksRoute";
import genresRoute from "./allRoutes/genresRoute";
import authorsRoute from "./allRoutes/authorsRoute";
import imagesRoutes from "./allRoutes/imagesRoute";

const routes: Router[] = [booksRoute, genresRoute, authorsRoute, imagesRoutes];

export default routes;
