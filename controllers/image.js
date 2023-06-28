//controllers forn image

import express from "express";
import mongoose from "mongoose";
import Image from "../model/images.js";


const router = express.Router();

export const getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    }

export const postImage = async (req, res) => {
    const imageData = req.body;
    const newImage = new Image(imageData);
    try {
        await newImage.save();
        res.status(201).json("Posted a image successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteImage = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No image with that id");
    await Image.findByIdAndRemove(id);
    res.json({ message: "Image deleted successfully" });
}

export default  router;

