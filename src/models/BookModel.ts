// Import Libs
import z from "zod";

// Import Modules
import prisma from "../database/prisma";
import { Book } from "@prisma/client";

class BookModel {
  static async create(body: Book): Promise<Book> {
    const dataSchema = z.object({
      title: z
        .string({
          invalid_type_error: "title must be string",
          required_error: "title is required",
        })
        .min(3, "title must be min 3 character"),
      editor: z
        .string({
          invalid_type_error: "editor must be string",
          required_error: "editor is required",
        })
        .min(3, "editor must be min 3 character"),
      synopsis: z
        .string({
          invalid_type_error: "synopsis must be string",
          required_error: "synopsis is required",
        })
        .min(3, "synopsis must be min 3 character"),
      price: z.number({
        invalid_type_error: "price must be number",
        required_error: "price is required",
      }),
      genreId: z.number({
        invalid_type_error: "genreId must be number",
        required_error: "genreId is required",
      }),

      authorId: z.number({
        invalid_type_error: "authorId must be number",
        required_error: "authorId is required",
      }),
    });

    const data = await prisma.book.create({ data: dataSchema.parse(body) });

    return data;
  }

  static async list(
    page: number,
    take: number,
  ): Promise<{ totalPages: number; page: number; books: Book[] }> {
    // (page * take - take)
    const skip: number = page * take - take;
    const totalPages = (await prisma.book.count()) / take; // total de páginas
    const data = await prisma.book.findMany({
      take,
      skip,
      include: { author: {}, genre: {}, image: {} },
    });
    return {
      totalPages,
      page,
      books: data,
    };
  }

  static async update(id: number, body: Book): Promise<Book> {
    const dataSchema = z.object({
      title: z
        .string({
          invalid_type_error: "title must be string",
        })
        .min(3, "title must be min 3 character")
        .optional(),
      editor: z
        .string({
          invalid_type_error: "editor must be string",
        })
        .min(3, "editor must be min 3 character")
        .optional(),
      synopsis: z
        .string({
          invalid_type_error: "synopsis must be string",
        })
        .min(3, "synopsis must be min 3 character")
        .optional(),
      price: z
        .number({
          invalid_type_error: "price must be number",
        })
        .optional(),
      genreId: z
        .number({
          invalid_type_error: "genreId must be number",
        })
        .optional(),
      authorId: z
        .number({
          invalid_type_error: "authorId must be number",
        })
        .optional(),
    });

    const data = await prisma.book.update({
      where: { id },
      data: dataSchema.parse(body),
    });

    return data;
  }

  static async delete(id: number): Promise<void> {
    await prisma.book.delete({ where: { id } });
  }

  static async getOne(id: number): Promise<Book | null> {
    return await prisma.book.findFirst({ where: { id } });
  }
}

export default BookModel;
