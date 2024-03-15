"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthorController_1 = __importDefault(require("../../controllers/AuthorController"));
const router = (0, express_1.Router)();
router.get("/authors", AuthorController_1.default.list);
router.post("/authors", AuthorController_1.default.create);
router.put("/authors/:id", AuthorController_1.default.update);
router.delete("/authors/:id", AuthorController_1.default.delete);
exports.default = router;
//# sourceMappingURL=authorsRoute.js.map