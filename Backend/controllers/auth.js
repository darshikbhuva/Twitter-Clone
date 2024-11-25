import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Tweet } from "../models/tweetSchema.js";

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
        user,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};

export const Logout = (req, res) => {
  return res
    .cookie("token", null, { expiresIn: new Date(Date.now() - 1000) })
    .json({
      message: `user logout successfully`,
      success: true,
    });
};

export const Bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);

    if (user.bookmark.includes(loggedInUserId)) {
      //remove

      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmark: tweetId },
      });

      return res.status(200).json({
        message: "User remove bookmark from your tweet.",
      });
    } else {
      //bookmark tweet

      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmark: tweetId },
      });

      return res.status(200).json({
        message: "User add bookmark to your tweet.",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");

    return res.status(200).json({
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOtherUser = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );

    if (!otherUsers) {
      return res.status(401).json({
        message: "currently does not any other user",
        status: false,
      });
    }

    return res.status(401).json({
      otherUsers,
    });
  } catch (err) {
    console.log(err);
  }
};

export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const otherUserId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId);
    const otherUser = await User.findById(otherUserId);

    if (!otherUser.followers.includes(loggedInUserId)) {
      await User.updateOne(otherUser, {
        $push: { followers: loggedInUserId },
      });
      await User.updateOne(loggedInUser, {
        $push: { following: otherUserId },
      });

      return res.status(200).json({
        message: `${loggedInUser.name} follow to ${otherUser.name}`,
      });
    } else {
      return res.status(200).json({
        message: `${loggedInUser.name} already followed to ${otherUser.name}`,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const unFollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const otherUserId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId);
    const otherUser = await User.findById(otherUserId);

    if (loggedInUser.following.includes(otherUserId)) {
      await User.updateOne(loggedInUser, {
        $pull: { following: otherUserId },
      });
      await User.updateOne(otherUser, {
        $pull: { followers: loggedInUserId },
      });

      return res.status(200).json({
        message: `${loggedInUser.name} unFollow  ${otherUser.name}`,
        success: true,
      });
    } else {
      return res.status(200).json({
        message: `${loggedInUser.name} does't follow ${otherUser.name}`,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
