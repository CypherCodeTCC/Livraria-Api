import { Router } from "express";
import multer from "multer";

// import { uploadFile } from "../../middlewares/multer";
import ImageController from "../../controllers/ImageController";

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/png") cb(null, true);
    if (file.mimetype === "image/jpeg") cb(null, true);
    cb(null, false);
  },
});

const router = Router();

router.post("/images", upload.single("image"), ImageController.create);

export default router;
