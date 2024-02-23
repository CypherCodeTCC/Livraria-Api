import { Router } from "express";

// Routes
import booksRoute from "./allRoutes/booksRoute";

const routes: Router[] = [booksRoute];

export default routes;
