import { ObjectId } from "mongoose";
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
  const book = await Book.find().populate("reviews.userId");

  const bookCount = await Book.find().countDocuments();
  if (!book) return false;

  return [book, bookCount];
 } catch (error) {
  return false;
 }
};
export const getBookById = async (id: string) => {
 try {
  const book = await Book.findById(id).populate("reviews.userId");

  if (!book) return false;

  return book;
 } catch (error) {
  return false;
 }
};
export const postUserReview = async (
 id: string,
 reviewData: { userId: ObjectId; rating: number; comment: string }
) => {
 try {
  const reviewAllReadyExists = await Book.findOne({
   _id: id,
   "reviews.userId": reviewData.userId,
  });

  if (reviewAllReadyExists) return false;

  const book = await Book.findByIdAndUpdate(
   id,
   {
    $addToSet: { reviews: reviewData },
   },
   {
    new: true,
   }
  ).populate("reviews.userId");

  if (!book) return false;

  return book;
 } catch (error) {
  return false;
 }
};
