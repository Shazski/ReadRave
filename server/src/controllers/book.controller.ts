import { NextFunction, Request, Response } from "express";
import {
 createBook,
 getAllBooksdetails,
 getBookById,
 postUserReview,
} from "../services/book.service";
import mongoose, { Schema } from "mongoose";

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
 } catch (error) {
  next(error);
 }
};
export const getBookDetailsById = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const id = req.params.id;
 try {
  const book = await getBookById(id);

  if (!book) return next("No book found");

  res.status(200).json({
   success: true,
   data: book,
   message: " books found successfully",
  });
 } catch (error) {
  next(error);
 }
};
export const postReview = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const id = req.params.id;
 const reviewData = req.body;
 try {
  const book = await postUserReview(id, reviewData);

  if (!book) return next("Your review is already posted");

  res.status(200).json({
   success: true,
   data: book,
   message: "user review added succesfully",
  });
 } catch (error) {
  next(error);
 }
};
