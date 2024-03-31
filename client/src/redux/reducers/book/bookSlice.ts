import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks } from "../../actions/book/bookActions";
import { IBook } from "../../../Interfaces/Ibook";

const bookSlice = createSlice({
 name: "book",
 initialState: {
  book: null as IBook[] | null,
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
    state.book = payload as IBook[];
   })
   .addCase(getAllBooks.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload as string;
   });
 },
});

export default bookSlice.reducer;
