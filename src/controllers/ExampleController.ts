// Imports Libs
import { Request, Response } from "express";
import { ZodError } from "zod";

// Imports Modules
import HttpErrors from "../errors/HttpErrors";

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

class ExampleController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(500).json("Example");
    } catch (e) {
      return errorCatch(e, res);
    }
  }
}

export default ExampleController;
