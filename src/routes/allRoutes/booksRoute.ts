import { Router } from "express";

import BookController from "../../controllers/BookController";

const router = Router();

router.get("/books", BookController.index);

export default router;
