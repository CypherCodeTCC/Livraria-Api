// Imports Libs
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

// Imports Modules
import HttpErrors from "../errors/HttpErrors";

const prisma = new PrismaClient();

function errorCatch(e: unknown, res: Response) {
  const httpErrors = new HttpErrors(res);

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
    } finally {
      prisma.$disconnect();
    }
  }
}

export default ExampleController;
