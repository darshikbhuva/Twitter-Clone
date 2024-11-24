import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: ".env" });

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    //basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "User is already exist.  ",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "user does not exist with this email",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY);
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1D", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};
