import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
 name: "book",
 initialState: {
  book: {
   title: "" as string,
   author: "" as string,
   description: "" as string,
   reviews: [
    {
     userId: "" as string,
     rating: null as number | null,
     comment: "" as string,
    },
   ],
  },
  loading: false as boolean,
  error: "" as string,
 },
 reducers: {},

 extraReducers(builder) {
  builder;
 },
});

export default bookSlice.reducer;
