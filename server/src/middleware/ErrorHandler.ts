import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
 err: Error,
 req: Request,
 res: Response,
 next: NextFunction
) => {
 res.status(400).json({ error: err?.message ?? "Something went wrong!" });
};
