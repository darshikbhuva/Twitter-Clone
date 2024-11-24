import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../middlewares/.env" });

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // console.log(token);

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    // console.log(decode);
    req.user = decode.userId;
    next();
  } catch (err) {
    console.log(err);
  }
};

export default isAuth;
