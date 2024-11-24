import express from "express";
import isAuth from "../middlewares/auth.js";
import {
  createTweet,
  deleteTweet,
  likeOrDislike,
} from "../controllers/tweetController.js";

const tweetRouter = express.Router();

tweetRouter.post("/create", isAuth, createTweet);
tweetRouter.delete("/delete/:id", isAuth, deleteTweet);
tweetRouter.put("/like/:id", isAuth, likeOrDislike);

export default tweetRouter;
