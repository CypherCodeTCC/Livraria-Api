"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
// import { uploadFile } from "../../middlewares/multer";
const ImageController_1 = __importDefault(require("../../controllers/ImageController"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage,
    fileFilter(req, file, cb) {
        if (file.mimetype === "image/png")
            cb(null, true);
        if (file.mimetype === "image/jpeg")
            cb(null, true);
        cb(null, false);
    },
});
const router = (0, express_1.Router)();
router.post("/images", upload.single("image"), ImageController_1.default.create);
exports.default = router;
//# sourceMappingURL=imagesRoute.js.map