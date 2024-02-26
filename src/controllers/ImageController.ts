// Imports Libs
import { Request, Response } from "express";

// Imports Modules
import handleErrors from "../errors/handleErrors";

class ExampleController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(500).json("Example");
    } catch (e) {
      return handleErrors(e, res);
    }
  }
}

export default ExampleController;
