import express from "express";
import { UserController } from "../controllers";
import { CurrentUser, userAuth } from "../middleware";

export default () => {
 const router = express.Router();

 router.route("/").get(CurrentUser, userAuth, UserController.getUser);
 router.route("/register").post(UserController.register);
 router.route("/login").post(UserController.login);

 return router;
};
