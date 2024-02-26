import { Router } from "express";

import AuthorController from "../../controllers/AuthorController";

const router = Router();

router.get("/authors", AuthorController.list);

router.post("/authors", AuthorController.create);

router.put("/authors/:id", AuthorController.update);

router.delete("/authors/:id", AuthorController.delete);

export default router;
