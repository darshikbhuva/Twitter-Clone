import express from "express";
import { Register } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(Register);

export default router;
