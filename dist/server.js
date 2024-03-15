"use strict";
// Server configs
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports Libs
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Imports Modules
const UseRoutes_1 = __importDefault(require("./helpers/UseRoutes"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true })); // permitindo o recebimento de parâmetros
app.use(express_1.default.json()); // permitindo json no express
app.use((0, cors_1.default)());
// usando rotas
const useRoutes = new UseRoutes_1.default(app);
useRoutes.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map