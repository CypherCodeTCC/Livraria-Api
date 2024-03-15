"use strict";
// init server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports modules
const server_1 = __importDefault(require("./server"));
const PORT = 3002;
server_1.default.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map