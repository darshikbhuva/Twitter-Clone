import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
    comment: {
      type: Array,
      default: [],
    },
    bookmark: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
