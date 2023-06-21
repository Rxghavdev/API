
//api routes for controllers

import express from "express";

const router = express.Router();

import { getFacts, postFact, deleteFact } from "../controllers/api.js";

router.get("/getFacts", getFacts);
router.post("/postFact", postFact);
router.delete("/deleteFact/:id", deleteFact);

export default router;



