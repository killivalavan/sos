import express from "express";
const router = express.Router();
import Post from "../Models/post.js";

router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    city: req.body.city,
    locality: req.body.locality,
    country: req.body.country,
    date: req.body.date,
    category: req.body.category,
    message: req.body.message,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: "Post not Found", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: "Post not Found", error: err });
  }
});

export default router;
