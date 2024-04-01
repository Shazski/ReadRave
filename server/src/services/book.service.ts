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
export const getAllBooksdetails = async (page: number, search: string) => {
 try {
  const regex = new RegExp(search, "i");

  const query = {
   $or: [{ author: regex }, { title: regex }, { description: regex }],
  };

  const pageSize = 10;
  const skip = (page - 1) * pageSize;

  const books = await Book.find(query)
   .populate("reviews.userId")
   .limit(pageSize)
   .skip(skip);

  const bookCount = await Book.find(query).countDocuments();

  return [books, bookCount];
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
