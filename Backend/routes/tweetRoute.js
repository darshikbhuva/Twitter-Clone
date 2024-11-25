import express from "express";
import isAuth from "../middlewares/auth.js";
import {
  createTweet,
  deleteTweet,
  getAllTweets,
  getFollowingTweets,
  likeOrDislike,
} from "../controllers/tweetController.js";

const tweetRouter = express.Router();

tweetRouter.post("/create", isAuth, createTweet);
tweetRouter.delete("/delete/:id", isAuth, deleteTweet);
tweetRouter.put("/like/:id", isAuth, likeOrDislike);
tweetRouter.get("/getalltweets/:id", isAuth, getAllTweets);
tweetRouter.get("/getfollowingtweets/:id", isAuth, getFollowingTweets);

export default tweetRouter;
