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
const AuthorModel_1 = __importDefault(require("../models/AuthorModel"));
class AuthorController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield AuthorModel_1.default.create(req.body);
                return res.status(201).json(data);
            }
            catch (e) {
                return (0, handleErrors_1.default)(e, res);
            }
        });
    }
    static list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield AuthorModel_1.default.list();
                return res.status(200).json(data);
            }
            catch (e) {
                return (0, handleErrors_1.default)(e, res);
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                delete req.body.id; // garantindo que não tenha id
                const id = Number(req.params.id);
                const data = yield AuthorModel_1.default.update(id, req.body);
                return res.status(200).json(data);
            }
            catch (e) {
                return (0, handleErrors_1.default)(e, res);
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                yield AuthorModel_1.default.delete(id);
                return res.status(204).json();
            }
            catch (e) {
                return (0, handleErrors_1.default)(e, res);
            }
        });
    }
}
exports.default = AuthorController;
//# sourceMappingURL=AuthorController.js.map