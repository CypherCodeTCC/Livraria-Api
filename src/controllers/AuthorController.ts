// Imports Libs
import { Request, Response } from "express";
import { ZodError } from "zod";

// Imports Modules
import HttpErrors from "../errors/HttpErrors";
import AuthorModel from "../models/AuthorModel";

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

class AuthorController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await AuthorModel.create(req.body);

      return res.status(201).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async list(req: Request, res: Response): Promise<Response> {
    try {
      const data = await AuthorModel.list();

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      delete req.body.id; // garantindo que não tenha id

      const id = Number(req.params.id);

      const data = await AuthorModel.update(id, req.body);

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await AuthorModel.delete(id);
      return res.status(204).json();
    } catch (e) {
      return errorCatch(e, res);
    }
  }
}

export default AuthorController;
