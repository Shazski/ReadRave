import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBook } from "../../../Interfaces/Ibook";
import { commonRequest } from "../../../config/axios";
import { config } from "../../../config/constants";
import { IReview } from "../../../Interfaces/IReview";

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
 async (reviewData: IReview, { rejectWithValue }) => {
  return commonRequest(
   "patch",
   "book/add-book",
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
