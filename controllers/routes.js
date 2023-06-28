//api routes for controllers

import express from "express";

const router = express.Router();

import {
  getFacts,
  postFact,
  deleteFact,
  likeFact,
} from "../controllers/api.js";
import { getImages, postImage, deleteImage } from "../controllers/image.js";

router.get("/getFacts", getFacts);
router.post("/postFact", postFact);
router.delete("/deleteFact/:id", deleteFact);
router.put("/likeFact/:id", likeFact);

router.get("/getImages", getImages);
router.post("/postImage", postImage);
router.delete("/deleteImage/:id", deleteImage);

export default router;
