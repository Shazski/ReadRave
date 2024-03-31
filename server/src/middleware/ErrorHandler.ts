import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
 err: Error,
 req: Request,
 res: Response,
 next: NextFunction
) => {
 res
  .status(400)
  .json({ message: err?.message ?? err ?? "Something went wrong!" });
};
