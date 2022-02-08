import express from "express";
import mongoose from "mongoose";
import PostRoute from "./Routes/Post.js";
import dotenv from "dotenv";
import cors from "cors";
// Delpoyment
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

app.use("/posts", PostRoute);

// Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", index.html))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server is connected to ${PORT}`));

//Connect  to DB
mongoose.connect(process.env.MONGO_DB_URL, () =>
  console.log(`Connected to DB`)
);
