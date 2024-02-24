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

class AuthorController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await prisma.author.create({
        data: {
          name: req.body.name,
          bio: req.body.bio,
        },
      });

      return res.status(201).json(data);
    } catch (e) {
      return errorCatch(e, res);
    } finally {
      prisma.$disconnect();
    }
  }

  static async list(req: Request, res: Response): Promise<Response> {
    try {
      const data = await prisma.author.findMany();

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    } finally {
      prisma.$disconnect();
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      delete req.body.id; // garantindo que não tenha id

      const id = Number(req.params.id);

      const data = await prisma.genre.update({
        where: {
          id,
        },
        data: {
          name: req.body.name,
          about: req.body.about,
        },
      });

      return res.status(200).json(data);
    } catch (e) {
      return errorCatch(e, res);
    } finally {
      prisma.$disconnect();
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await prisma.genre.delete({ where: { id } });
      return res.status(204).json();
    } catch (e) {
      return errorCatch(e, res);
    } finally {
      prisma.$disconnect();
    }
  }
}

export default AuthorController;
