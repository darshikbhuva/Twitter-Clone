import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();
try {
  app.listen(process.env.PORT, () => {
    console.log(`server listen at port ${process.env.PORT}`);
  });
} catch (err) {
  console.log("fadfasfasfasfd", err);
}
