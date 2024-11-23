import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
