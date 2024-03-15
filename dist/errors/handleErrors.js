"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Imports Modules
const HttpErrors_1 = __importDefault(require("./HttpErrors"));
function handleErrors(e, res) {
    const httpErrors = new HttpErrors_1.default(res);
    // ser for um erro de validação do ZOD
    if (e instanceof zod_1.ZodError) {
        return httpErrors.badRequest(e.errors.map((error) => error.message), e.name);
    }
    console.log(e);
    return httpErrors.badRequest(["Unexpected Error"], "Please contact developer system!");
}
exports.default = handleErrors;
//# sourceMappingURL=handleErrors.js.map