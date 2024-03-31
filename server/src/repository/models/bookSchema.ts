import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IBooks } from "../../interfaces/IBookSchema";

const BooksSchema: Schema = new Schema({
 bookTitle: { type: String, required: true },
 author: { type: String, required: true },
 coverimage: { type: String },
 reviews: [
  {
   userId: { type: Schema.Types.ObjectId, ref: "Users" },
   comment: { type: String },
   rating: { type: Number },
  },
 ],
 Description: { type: String },
});

const Books = mongoose.model<IBooks>("Books", BooksSchema);

export default Books;
