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
// Imports Modules
const handleErrors_1 = __importDefault(require("../errors/handleErrors"));
const ImageModel_1 = __importDefault(require("../models/ImageModel"));
const HttpErrors_1 = __importDefault(require("../errors/HttpErrors"));
const BookModel_1 = __importDefault(require("../models/BookModel"));
class ImageController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificando se tem o id do livro
                const httpErrors = new HttpErrors_1.default(res);
                if (!req.query.bookId || !Number(req.query.bookId)) {
                    return httpErrors.badRequest(["field bookId is required"], "Bad Request");
                }
                // convertendo para número
                const bookId = Number(req.query.bookId);
                const book = yield BookModel_1.default.getOne(bookId); // procurando livro
                if (!book)
                    return httpErrors.badRequest(["book id is not found"], "Bad request");
                if (!req.file) {
                    return httpErrors.badRequest(["this type file is not valid"], "Bad request");
                }
                const data = yield ImageModel_1.default.create(req.file, bookId);
                return res.status(201).json(data);
            }
            catch (e) {
                return (0, handleErrors_1.default)(e, res);
            }
        });
    }
}
exports.default = ImageController;
//# sourceMappingURL=ImageController.js.map