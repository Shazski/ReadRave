import express, { Application, NextFunction, Request, Response } from "express";
import { PORT } from "./lib/envConfig";
import cookieParser from "cookie-parser";
import { BookRouter, UserRouter } from "./routes";
import cors from "cors";
import { corsOptions } from "./lib/constants";
import { ErrorHandler } from "./middleware/ErrorHandler";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/book", BookRouter());
app.use("/api/v1/user", UserRouter());

app.all("*", (req: Request, res: Response, next: NextFunction) => {
 next(new Error("api endpoint not found"));
});

app.use(ErrorHandler);

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
