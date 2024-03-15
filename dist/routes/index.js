"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Rotas
const booksRoute_1 = __importDefault(require("./allRoutes/booksRoute"));
const genresRoute_1 = __importDefault(require("./allRoutes/genresRoute"));
const authorsRoute_1 = __importDefault(require("./allRoutes/authorsRoute"));
const imagesRoute_1 = __importDefault(require("./allRoutes/imagesRoute"));
const routes = [booksRoute_1.default, genresRoute_1.default, authorsRoute_1.default, imagesRoute_1.default];
exports.default = routes;
//# sourceMappingURL=index.js.map