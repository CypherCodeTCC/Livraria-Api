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
  static async create(body: Book) {
    const dataSchema = z.object({});

    return data;
  }
}

export default BookModel;
