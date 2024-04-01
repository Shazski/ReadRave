import express from "express";
import { BookController } from "../controllers";

export default () => {
 const router = express.Router();

 router.route("/add-book").post(BookController.publishBook);
 router.route("/get-all-books").get(BookController.getAllBooks);
 router.route("/get-book-details/:id").get(BookController.getBookDetailsById);
 router.route("/post-review/:id").patch(BookController.postReview);

 return router;
};
