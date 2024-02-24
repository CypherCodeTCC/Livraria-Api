import { Router } from "express";

import GenreController from "../../controllers/GenreController";

const router = Router();

router.get("/genres", GenreController.list);

router.post("/genres", GenreController.create);

router.put("/genres/:id", GenreController.update);

router.delete("/genres/:id", GenreController.delete);

export default router;
