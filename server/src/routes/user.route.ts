import express from "express";
import { UserController } from "../controllers";

export default () => {
 const router = express.Router();

 router.route("/register").post(UserController.register);
 router.route("/login").post(UserController.login);

 return router;
};
