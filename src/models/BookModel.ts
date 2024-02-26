// Import Libs
import z from "zod";

// Import Modules
import prisma from "../database/prisma";
import { Book } from "@prisma/client";

// model Book {
//   id       Int    @id @default(autoincrement())
//   title    String
//   editor   String
//   synopsis String
//   price    Float
//   genre    Genre  @relation(fields: [genreId], references: [id])
//   genreId  Int
//   author   Author @relation(fields: [authorId], references: [id])
//   authorId Int
//   image Image? @relation(fields: [imageId], references: [id])
//   imageId Int? @unique
// }

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
  ): Promise<{ page: number; books: Book[] }> {
    // (page * take - take)
    const skip: number = page * take - take;
    const data = await prisma.book.findMany({ take, skip });
    return {
      page,
      books: data,
    };
  }
}

export default BookModel;
