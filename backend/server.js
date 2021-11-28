import express from "express";
import mongoose from "mongoose";
import PostRoute from "./Routes/Post.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

app.use("/posts", PostRoute);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server is connected to ${PORT}`));

//Connect  to DB
mongoose.connect(process.env.MONGO_DB_URL, () =>
  console.log(`Connected to DB`)
);
