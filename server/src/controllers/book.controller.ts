import { NextFunction, Request, Response } from "express";
import { createBook, getAllBooksdetails } from "../services/book.service";

export const publishBook = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const bookDetails = req.body;
 try {
  const newBook = await createBook(bookDetails);

  if (!newBook) return next("Book publish failed");

  res.status(201).json({
   success: true,
   data: newBook,
   message: "Book published successfully",
  });
 } catch (error) {}
};
export const getAllBooks = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 try {
  const books = await getAllBooksdetails();

  if (!books) return next("No books found");

  res.status(200).json({
   success: true,
   data: books,
   message: "All books found successfully",
  });
 } catch (error) {}
};
