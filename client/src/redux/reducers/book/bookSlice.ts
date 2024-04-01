import { createSlice } from "@reduxjs/toolkit";
import {
 getAllBooks,
 getBookById,
 postReview,
} from "../../actions/book/bookActions";
import { IBook } from "../../../Interfaces/Ibook";

const bookSlice = createSlice({
 name: "book",
 initialState: {
  book: null as IBook[] | null,
  bookDetails: null as IBook | null,
  bookCount: null as number | null,
  loading: false as boolean,
  error: "" as string,
 },
 reducers: {},

 extraReducers(builder) {
  builder
   .addCase(getAllBooks.pending, (state) => {
    state.loading = true;
   })
   .addCase(getAllBooks.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.book = payload[0] as IBook[];
    state.bookCount = payload[1];
   })
   .addCase(getAllBooks.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload as string;
   })
   .addCase(getBookById.pending, (state) => {
    state.loading = true;
   })
   .addCase(getBookById.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.bookDetails = payload as IBook;
   })
   .addCase(getBookById.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload as string;
   })
   .addCase(postReview.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.bookDetails = payload as IBook;
   })
   .addCase(postReview.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload as string;
   });
 },
});

export default bookSlice.reducer;
