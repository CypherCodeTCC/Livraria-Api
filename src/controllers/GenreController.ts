// Imports Libs
import { Request, Response } from "express";
import { ZodError } from "zod";

// Imports Modules
import HttpErrors from "../errors/HttpErrors";
import GenreModel from "../models/GenreModel";

function errorCatch(e: unknown, res: Response) {
  const httpErrors = new HttpErrors(res);

  // ser for um erro de validação do ZOD
  if (e instanceof ZodError) {
    return httpErrors.badRequest(
      e.errors.map((error) => error.message),
      e.name,
    );
  }

  return httpErrors.badRequest(
    ["Unexpected Error"],
    "Please contact developer system!",
  );
}

class GenreController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await GenreModel.create(req.body);

      return res.status(201).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async list(req: Request, res: Response): Promise<Response> {
    try {
      const data = await GenreModel.list();

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      delete req.body.id; // garantindo que não tenha id

      const id = Number(req.params.id);

      const data = await GenreModel.update(id, req.body);

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await GenreModel.delete(id);
      return res.status(204).json();
    } catch (e) {
      return errorCatch(e, res);
    }
  }
}

export default GenreController;
