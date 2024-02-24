// Imports Libs
import prisma from "../database/prisma";

type Data = {
  id?: number;
  name: string;
  about: string;
};

class GenreModel {
  static async create(body: Data): Promise<Data> {
    if (body.name.length === 0) throw TypeError("Name must be value");
    if (body.about.length === 0) throw TypeError("About must be value");

    const data = await prisma.genre.create({
      data: body,
    });

    return data;
  }

  static async list(): Promise<Data[]> {
    const data = await prisma.genre.findMany();

    return data;
  }

  static async update(id: number, body: Data): Promise<Data> {
    if ("name" in body && body.name.length === 0)
      throw TypeError("Name must be value");
    if ("about" in body && body.about.length === 0)
      throw TypeError("About must be value");

    const data = await prisma.genre.update({
      where: {
        id,
      },
      data: body,
    });

    return data;
  }

  static async delete(id: number): Promise<void> {
    await prisma.genre.delete({ where: { id } });
  }
}

export default GenreModel;
