import { Response } from "express";

// Esquema da resposta de um erro
type ResponseSchema = {
  message: string;
  errors: string[];
};

interface BadRequest {
  badRequest(errors: string[], message: string): Promise<Response> | Response;
}

export default class HttpErrors implements BadRequest {
  constructor(private _res: Response) {}

  badRequest(errors: string[], message: string) {
    const CODE: number = 400;
    const response: ResponseSchema = {
      message,
      errors,
    };
    return this._res.status(CODE).json(response);
  }
}
