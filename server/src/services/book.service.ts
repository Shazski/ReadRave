import { IBook } from "../interfaces/Ibooks";
import { Book } from "../repository/models";

export const createBook = async (bookDetails: IBook) => {
 try {
  const book = await Book.create({
   ...bookDetails,
  });

  if (!book) return false;

  return book;
 } catch (error) {
  return false;
 }
};
export const getAllBooksdetails = async () => {
 try {
  const book = await Book.find();
  if (!book) return false;

  return book;
 } catch (error) {
  return false;
 }
};
