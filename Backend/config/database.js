import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../config/.env" });

// const databaseConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//       console.log("database connected successfully to mongoDb");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};

export default databaseConnection;
