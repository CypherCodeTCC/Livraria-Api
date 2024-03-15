"use strict";
// Imports Libs
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
const prisma_1 = __importDefault(require("../database/prisma"));
const supabase_1 = __importDefault(require("../database/supabase"));
const BUCKET_NAME = "images";
class ImageModel {
    static create(file, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Upload image
            const randomNumber = Math.floor(Math.random() * 1000);
            const nameImage = `${Number(new Date())}-${randomNumber}`;
            const dataImage = yield supabase_1.default.storage
                .from(BUCKET_NAME)
                .upload(nameImage, file.buffer, {
                contentType: file.mimetype,
            });
            // get url
            const url = yield supabase_1.default.storage
                .from(BUCKET_NAME)
                .getPublicUrl(dataImage.data.path);
            // create image on database
            const data = yield prisma_1.default.image.create({
                data: {
                    storageName: dataImage.data.path,
                    url: url.data.publicUrl,
                    bookId,
                },
            });
            return data;
        });
    }
}
exports.default = ImageModel;
//# sourceMappingURL=ImageModel.js.map