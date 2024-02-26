// Imports Libs
import { Request, Response } from "express";

// Imports Modules
import handleErrors from "../errors/handleErrors";
import GenreModel from "../models/GenreModel";

class GenreController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await GenreModel.create(req.body);

      return res.status(201).json(data);
    } catch (e) {
      return handleErrors(e, res);
    }
  }

  static async list(req: Request, res: Response): Promise<Response> {
    try {
      const data = await GenreModel.list();

      return res.status(200).json(data);
    } catch (e) {
      return handleErrors(e, res);
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      delete req.body.id; // garantindo que não tenha id

      const id = Number(req.params.id);

      const data = await GenreModel.update(id, req.body);

      return res.status(200).json(data);
    } catch (e) {
      return handleErrors(e, res);
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await GenreModel.delete(id);
      return res.status(204).json();
    } catch (e) {
      return handleErrors(e, res);
    }
  }
}

export default GenreController;
