// import { date } from "joi";
import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
