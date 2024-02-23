import { Router } from "express";

import GenreController from "../../controllers/GenreController";

const router = Router();

router.post("/genre", GenreController.create);

export default router;
