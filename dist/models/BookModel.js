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
// Import Libs
const zod_1 = __importDefault(require("zod"));
// Import Modules
const prisma_1 = __importDefault(require("../database/prisma"));
class BookModel {
    static create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSchema = zod_1.default.object({
                title: zod_1.default
                    .string({
                    invalid_type_error: "title must be string",
                    required_error: "title is required",
                })
                    .min(3, "title must be min 3 character"),
                editor: zod_1.default
                    .string({
                    invalid_type_error: "editor must be string",
                    required_error: "editor is required",
                })
                    .min(3, "editor must be min 3 character"),
                synopsis: zod_1.default
                    .string({
                    invalid_type_error: "synopsis must be string",
                    required_error: "synopsis is required",
                })
                    .min(3, "synopsis must be min 3 character"),
                price: zod_1.default.number({
                    invalid_type_error: "price must be number",
                    required_error: "price is required",
                }),
                genreId: zod_1.default.number({
                    invalid_type_error: "genreId must be number",
                    required_error: "genreId is required",
                }),
                authorId: zod_1.default.number({
                    invalid_type_error: "authorId must be number",
                    required_error: "authorId is required",
                }),
            });
            const data = yield prisma_1.default.book.create({ data: dataSchema.parse(body) });
            return data;
        });
    }
    static list(page, take) {
        return __awaiter(this, void 0, void 0, function* () {
            // (page * take - take)
            const skip = page * take - take;
            const totalPages = (yield prisma_1.default.book.count()) / take; // total de páginas
            const data = yield prisma_1.default.book.findMany({
                take,
                skip,
                include: { author: {}, genre: {}, image: {} },
            });
            return {
                totalPages,
                page,
                books: data,
            };
        });
    }
    static update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSchema = zod_1.default.object({
                title: zod_1.default
                    .string({
                    invalid_type_error: "title must be string",
                })
                    .min(3, "title must be min 3 character")
                    .optional(),
                editor: zod_1.default
                    .string({
                    invalid_type_error: "editor must be string",
                })
                    .min(3, "editor must be min 3 character")
                    .optional(),
                synopsis: zod_1.default
                    .string({
                    invalid_type_error: "synopsis must be string",
                })
                    .min(3, "synopsis must be min 3 character")
                    .optional(),
                price: zod_1.default
                    .number({
                    invalid_type_error: "price must be number",
                })
                    .optional(),
                genreId: zod_1.default
                    .number({
                    invalid_type_error: "genreId must be number",
                })
                    .optional(),
                authorId: zod_1.default
                    .number({
                    invalid_type_error: "authorId must be number",
                })
                    .optional(),
            });
            const data = yield prisma_1.default.book.update({
                where: { id },
                data: dataSchema.parse(body),
            });
            return data;
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.book.delete({ where: { id } });
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.book.findFirst({ where: { id } });
        });
    }
}
exports.default = BookModel;
//# sourceMappingURL=BookModel.js.map