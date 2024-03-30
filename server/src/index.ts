import express from "express";
import { PORT } from "./lib/envConfig";
const app = express();






app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
