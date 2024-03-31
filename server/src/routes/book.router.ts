import express from "express";

export default () => {
 const router = express.Router();

 router.route("/add-book");

 return router;
};
