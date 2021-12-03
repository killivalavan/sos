import express from "express";
const router = express.Router();
import Post from "../Models/post.js";
//import { FormSchema } from "../Validation.js";

router.post("/", async (req, res) => {
  //Validate the data
  // const { error } = FormSchema.validate(req.body);

  // if (error) return res.status(400).send(error.details[0].message);

  // console.log(error);
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
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: "Post not Found", error: err });
  }
});

export default router;
