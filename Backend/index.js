import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT;

databaseConnection()
  .then(() => {
    console.log("database connection established...");
    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    });
  })
  .catch((err) => {
    console.log("database cannot be connected!!", err);
  });

//middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//api

app.use("/api/v1/user", userRoute);
