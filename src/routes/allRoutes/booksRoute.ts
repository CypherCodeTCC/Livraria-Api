import { Router } from "express";

import BooksController from "../../controllers/BooksController";

const router = Router();

router.get("/books", BooksController.index);

export default router;
