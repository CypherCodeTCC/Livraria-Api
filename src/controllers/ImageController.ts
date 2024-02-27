// Imports Libs
import { Request, Response } from "express";

// Imports Modules
import handleErrors from "../errors/handleErrors";
import ImageModel from "../models/ImageModel";
import HttpErrors from "../errors/HttpErrors";
import BookModel from "../models/BookModel";

class ImageController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      // Verificando se tem o id do livro
      const httpErrors = new HttpErrors(res);
      if (!req.query.bookId || !Number(req.query.bookId)) {
        return httpErrors.badRequest(
          ["field bookId is required"],
          "Bad Request",
        );
      }

      // convertendo para número
      const bookId: number = Number(req.query.bookId);

      const book = await BookModel.getOne(bookId); // procurando livro

      if (!book)
        return httpErrors.badRequest(["book id is not found"], "Bad request");

      if (!req.file) {
        return httpErrors.badRequest(
          ["this type file is not valid"],
          "Bad request",
        );
      }

      const data = await ImageModel.create(req.file, bookId);
      return res.status(201).json(data);
    } catch (e) {
      return handleErrors(e, res);
    }
  }
}

export default ImageController;
