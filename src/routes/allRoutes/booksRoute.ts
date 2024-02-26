import { Router } from "express";

import BookController from "../../controllers/BookController";

const router = Router();

router.get("/books", BookController.list);

router.post("/books", BookController.create);

router.put("/books/:id", BookController.update);

router.delete("/books/:id", BookController.delete);

export default router;
