//model for image

import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
    image_url: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    Activeflag: {
        type: Boolean,
        default: true
    }
});

const Image = mongoose.model("Image", imageSchema);

export default Image;
