"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookController_1 = __importDefault(require("../../controllers/BookController"));
const router = (0, express_1.Router)();
router.get("/books", BookController_1.default.list);
router.post("/books", BookController_1.default.create);
router.put("/books/:id", BookController_1.default.update);
router.delete("/books/:id", BookController_1.default.delete);
exports.default = router;
//# sourceMappingURL=booksRoute.js.map