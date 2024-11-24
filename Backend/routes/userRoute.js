import express from "express";
import {
  Bookmark,
  follow,
  getMyProfile,
  getOtherUser,
  Login,
  Logout,
  Register,
  unFollow,
} from "../controllers/auth.js";
import isAuth from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter.post("/register", Register);
authRouter.post("/login", Login);
authRouter.get("/logout", Logout);
authRouter.put("/bookmark/:id", isAuth, Bookmark);
authRouter.get("/profile/:id", isAuth, getMyProfile);
authRouter.get("/otherUser/:id", isAuth, getOtherUser);
authRouter.post("/follow/:id", isAuth, follow);
authRouter.post("/unFollow/:id", isAuth, unFollow);

export default authRouter;
