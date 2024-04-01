import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBook } from "../../../Interfaces/Ibook";
import { commonRequest } from "../../../config/axios";
import { config } from "../../../config/constants";

//redux function to add book
export const pusblishBook = createAsyncThunk(
 "book/addBook",
 async (bookDetails: IBook, { rejectWithValue }) => {
  return commonRequest(
   "post",
   "book/add-book",
   config,
   rejectWithValue,
   bookDetails
  );
 }
);
//redux function to post review of users
export const postReview = createAsyncThunk(
 "book/postReview",
 async (
  {
   reviewData,
   id,
  }: {
   reviewData: { userId: string; rating: number; comment: string };
   id?: string;
  },
  { rejectWithValue }
 ) => {
  return commonRequest(
   "patch",
   `book/post-review/${id}`,
   config,
   rejectWithValue,
   reviewData
  );
 }
);

export const getAllBooks = createAsyncThunk(
 "book/getAllBooks",
 async (_, { rejectWithValue }) => {
  return commonRequest("get", "book/get-all-books", config, rejectWithValue);
 }
);
export const getBookById = createAsyncThunk(
 "book/getBookById",
 async (id: string, { rejectWithValue }) => {
  return commonRequest(
   "get",
   `book/get-book-details/${id}`,
   config,
   rejectWithValue
  );
 }
);
