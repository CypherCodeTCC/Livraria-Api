// Imports Libs
import z from "zod";

// Imports Modules
import prisma from "../database/prisma";

type Data = {
  id?: number;
  name: string;
  bio: string;
};

class AuthorModel {
  static async create(body: Data): Promise<Data> {
    const dataSchema = z.object({
      name: z
        .string({
          invalid_type_error: "Name must be string",
          required_error: "Name is required",
        })
        .min(3, "Name must be min 3 character"),
      bio: z
        .string({
          invalid_type_error: "Bio must be string",
          required_error: "Bio is required",
        })
        .min(10, "Bio must be min 10 character"),
    });

    const data = await prisma.author.create({ data: dataSchema.parse(body) });

    return data;
  }

  static async list(): Promise<Data[]> {
    return await prisma.author.findMany();
  }

  static async update(id: number, body: Data): Promise<Data> {
    const dataSchema = z.object({
      name: z
        .string({
          invalid_type_error: "Name must be string",
        })
        .min(3, "Name must be min 3 character")
        .optional(),
      bio: z
        .string({
          invalid_type_error: "Bio must be string",
        })
        .min(10, "Bio must be min 10 character")
        .optional(),
    });

    const data = await prisma.author.update({
      where: {
        id,
      },
      data: dataSchema.parse(body),
    });

    return data;
  }

  static async delete(id: number) {
    await prisma.author.delete({
      where: {
        id,
      },
    });
  }
}

export default AuthorModel;
