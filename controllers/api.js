//controlller for facts model
import express from "express";
import mongoose from "mongoose";
import Fact from "../model/facts.js";

const router = express.Router();

export async function getFacts(req, res) {
  try {
    const facts = await Fact.find();
    res.status(200).json(facts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const postFact = async (req, res) => {
  const factData = req.body;
  const newFact = new Fact(factData);
  try {
    await newFact.save();
    res.status(201).json("Posted a fact successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export async function deleteFact(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No fact with that id");
  await Fact.findByIdAndRemove(id);
  res.json({ message: "Fact deleted successfully" });
}
export async function likeFact(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No fact with that id");

  try {
    const fact = await Fact.findById(id);

    if (!fact) return res.status(404).send("No fact with that id");

    fact.likes = fact.likes + 1;
    await fact.save();

    return res.status(200).json(fact);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
}
export default router;
