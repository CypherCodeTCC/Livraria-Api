import { Router } from "express";

import AuthorController from "../../controllers/AuthorController";

const router = Router();

router.get("/authors", AuthorController.list);

router.post("/authors", AuthorController.create);

export default router;
