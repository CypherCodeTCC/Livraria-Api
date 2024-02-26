import { Router } from "express";

import BookController from "../../controllers/BookController";

const router = Router();

router.get("/books", BookController.list);

router.post("/books", BookController.create);

export default router;
