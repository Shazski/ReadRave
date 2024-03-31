import express from "express";
import { UserController } from "../controllers";

export default () => {
 const router = express.Router();
 
 router.route("/register").post(UserController.register);

 return router;
};
