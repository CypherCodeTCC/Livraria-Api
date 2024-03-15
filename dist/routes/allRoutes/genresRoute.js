"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GenreController_1 = __importDefault(require("../../controllers/GenreController"));
const router = (0, express_1.Router)();
router.get("/genres", GenreController_1.default.list);
router.post("/genres", GenreController_1.default.create);
router.put("/genres/:id", GenreController_1.default.update);
router.delete("/genres/:id", GenreController_1.default.delete);
exports.default = router;
//# sourceMappingURL=genresRoute.js.map