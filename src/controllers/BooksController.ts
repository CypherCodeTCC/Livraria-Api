import { Request, Response } from "express";

class BooksController {
  static async index(req: Request, res: Response): Promise<Response> {
    // simulando dados pra teste
    const data = [
      {
        id: 1,
        name: "Eduardo",
      },
      {
        id: 2,
        name: "Karen",
      },
    ];

    return res.status(200).json(data);
  }
}

export default BooksController;
