// Imports Libs
import { Request, Response } from "express";
import { ZodError } from "zod";

// Imports Modules
import HttpErrors from "../errors/HttpErrors";
import BookModel from "../models/BookModel";

function errorCatch(e: unknown, res: Response) {
  const httpErrors = new HttpErrors(res);

  // ser for um erro de validação do ZOD
  if (e instanceof ZodError) {
    return httpErrors.badRequest(
      e.errors.map((error) => error.message),
      e.name,
    );
  }

  console.log(e);

  return httpErrors.badRequest(
    ["Unexpected Error"],
    "Please contact developer system!",
  );
}

class BookController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await BookModel.create(req.body);
      return res.status(201).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async list(req: Request, res: Response): Promise<Response> {
    try {
      let page: number = 1; // valor padrão
      let take: number = 4; // valor padrão

      if (req.query.page && Number(req.query.page))
        page = Number(req.query.page);

      if (req.query.take && Number(req.query.take))
        take = Number(req.query.take);

      const data = await BookModel.list(page, take);

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }
}

export default BookController;
