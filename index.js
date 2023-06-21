import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getFacts, postFact, deleteFact } from "./controllers/api.js";
import router from "./controllers/routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 4000;
const databaseURI = process.env.DATABASE_URI;

mongoose
  .connect(databaseURI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

// Routes
app.get("/", function (req, res) {
  res.send("Homepage");
});

app.use("/users", router);

app.listen(PORT, function () {
  console.log("Server started on port: " + PORT);
});
