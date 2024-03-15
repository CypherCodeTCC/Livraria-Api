"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Imports Modules
const HttpErrors_1 = __importDefault(require("../errors/HttpErrors"));
function errorCatch(e, res) {
    const httpErrors = new HttpErrors_1.default(res);
    // ser for um erro de validação do ZOD
    if (e instanceof zod_1.ZodError) {
        return httpErrors.badRequest(e.errors.map((error) => error.message), e.name);
    }
    return httpErrors.badRequest(["Unexpected Error"], "Please contact developer system!");
}
class ExampleController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(500).json("Example");
            }
            catch (e) {
                return errorCatch(e, res);
            }
        });
    }
}
exports.default = ExampleController;
//# sourceMappingURL=ExampleController.js.map