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
// Imports Libs
const zod_1 = __importDefault(require("zod"));
// Imports Modules
const prisma_1 = __importDefault(require("../database/prisma"));
class AuthorModel {
    static create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSchema = zod_1.default.object({
                name: zod_1.default
                    .string({
                    invalid_type_error: "Name must be string",
                    required_error: "Name is required",
                })
                    .min(3, "Name must be min 3 character"),
                bio: zod_1.default
                    .string({
                    invalid_type_error: "Bio must be string",
                    required_error: "Bio is required",
                })
                    .min(10, "Bio must be min 10 character"),
            });
            const data = yield prisma_1.default.author.create({ data: dataSchema.parse(body) });
            return data;
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.author.findMany();
        });
    }
    static update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSchema = zod_1.default.object({
                name: zod_1.default
                    .string({
                    invalid_type_error: "Name must be string",
                })
                    .min(3, "Name must be min 3 character")
                    .optional(),
                bio: zod_1.default
                    .string({
                    invalid_type_error: "Bio must be string",
                })
                    .min(10, "Bio must be min 10 character")
                    .optional(),
            });
            const data = yield prisma_1.default.author.update({
                where: {
                    id,
                },
                data: dataSchema.parse(body),
            });
            return data;
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.author.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = AuthorModel;
//# sourceMappingURL=AuthorModel.js.map