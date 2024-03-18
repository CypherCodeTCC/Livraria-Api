// Imports Libs
import z from "zod";
import { Genre } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

// Imports Modules
const prisma = new PrismaClient();

class GenreModel {
  static async create(body: Genre): Promise<Genre> {
    // Estrutura dos dados
    const dataSchema = z.object({
      name: z
        .string({
          invalid_type_error: "Name must be string",
          required_error: "Name is required",
        })
        .min(3, "Name must be min 3 character"),
      about: z
        .string({
          invalid_type_error: "About must be string",
          required_error: "About is required",
        })
        .min(3, "About must be min 10 character"),
    });
    dataSchema.parse(body); // validando dados

    const data = await prisma.genre.create({
      data: body,
    });

    return data;
  }

  static async list(): Promise<Genre[]> {
    const data = await prisma.genre.findMany();

    return data;
  }

  static async update(id: number, body: Genre): Promise<Genre> {
    // Estrutura dos dados
    const dataSchema = z.object({
      name: z
        .string({
          invalid_type_error: "Name must be string",
        })
        .min(3, "Name must be min 3 character")
        .optional(),
      about: z
        .string({
          invalid_type_error: "About must be string",
        })
        .min(3, "About must be min 10 character")
        .optional(),
    });
    const data = await prisma.genre.update({
      where: {
        id,
      },
      data: dataSchema.parse(body),
    });

    return data;
  }

  static async delete(id: number): Promise<void> {
    await prisma.genre.delete({ where: { id } });
  }
}

export default GenreModel;
