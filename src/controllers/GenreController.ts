// Imports Libs
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

// Imports Modules
import HttpErrors from "../errors/HttpErrors";

const prisma = new PrismaClient();

function errorCatch(e: unknown, res: Response) {
  const httpErrors = new HttpErrors(res);

  if (e instanceof PrismaClientValidationError) {
    return httpErrors.badRequest([e.message], e.name);
  }

  return httpErrors.badRequest(
    ["Unexpected Error"],
    "Please contact developer system!",
  );
}

class GenreController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await prisma.genre.create({
        data: {
          name: req.body.name,
          about: req.body.about,
        },
      });

      return res.status(201).json(data);
    } catch (e) {
      return errorCatch(e, res);
    } finally {
      prisma.$disconnect();
    }
  }
}

export default GenreController;
