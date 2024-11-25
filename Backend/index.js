import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/userRoute.js";
import tweetRouter from "./routes/tweetRoute.js";
import cors from "cors";

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

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

//apis

app.use("/", authRouter);
app.use("/", tweetRouter);
