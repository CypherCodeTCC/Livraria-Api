import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

import HttpErrors from "../errors/HttpErrors";

const prisma = new PrismaClient();

class BooksController {
  static async index(req: Request, res: Response): Promise<Response> {
    try {
      const data = await prisma.book.findMany();

      return res.status(200).json(data);
    } catch (e) {
      const httpErrors = new HttpErrors(res);
      return httpErrors.badRequest([""], "Unexpected Error");
    } finally {
      prisma.$disconnect();
    }
  }
}

export default BooksController;
