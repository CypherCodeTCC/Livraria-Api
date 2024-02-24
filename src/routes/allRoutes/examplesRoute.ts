import { Router } from "express";

import ExampleController from "../../controllers/ExampleController";

const router = Router();

router.get("/example", ExampleController.create);

export default router;
