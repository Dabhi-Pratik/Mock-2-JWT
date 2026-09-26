import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import express from "express";
import connectDB from "./config/db.js";
import HttpError from "./middleware/HttpError.js";
import router from "./router/userRouter.js";

const app = express();

app.use(express.json());

app.use("/user", router);

app.get("/", (req, res, next) => {
  res.json("Hello from Server");
});

app.use((req, res, next) => {
  next(new HttpError("Requested Route not Fond", 404));
});

app.use((error, req, res, next) => {
  if (!res.headerSent) {
    throw new Error(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal Server error" });
});

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server running on Port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startServer();
