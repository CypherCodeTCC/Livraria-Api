// Imports Libs
import { Response } from "express";
import { ZodError } from "zod";

// Imports Modules
import HttpErrors from "./HttpErrors";

export default function handleErrors(e: unknown, res: Response) {
  const httpErrors = new HttpErrors(res);

  // ser for um erro de validação do ZOD
  if (e instanceof ZodError) {
    return httpErrors.badRequest(
      e.errors.map((error) => error.message),
      e.name,
    );
  }

  return httpErrors.badRequest(
    ["Unexpected Error"],
    "Please contact developer system!",
  );
}
