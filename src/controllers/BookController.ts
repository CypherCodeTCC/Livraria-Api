// Imports Libs
import { Request, Response } from "express";

// Imports Modules
import BookModel from "../models/BookModel";
import handleErrors from "../errors/handleErrors";

class BookController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await BookModel.create(req.body);
      return res.status(201).json(data);
    } catch (e) {
      return handleErrors(e, res);
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
      return handleErrors(e, res);
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      delete req.body.id;

      const id = Number(req.params.id);
      const data = await BookModel.update(id, req.body);
      return res.status(200).json(data);
    } catch (e) {
      return handleErrors(e, res);
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await BookModel.delete(id);
      return res.status(204).json();
    } catch (e) {
      return handleErrors(e, res);
    }
  }
}

export default BookController;
