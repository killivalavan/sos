import express from "express";
const router = express.Router();
import Post from "../Models/post.js";

router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    mail: req.body.mail,
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
    const post = await Post.find({}).sort({
      createdAt: -1,
    });
    res.json(post);
  } catch (err) {
    res.json({ message: "Post not Found", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: "Product not Found", error: err });
  }
});
export default router;
