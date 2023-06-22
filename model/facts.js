import mongoose from "mongoose";

const { Schema } = mongoose;

const factSchema = new Schema({
  fact: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  hindi_description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  active:{
    type: Boolean,
    default: true
  },
  report:{
    type : String
  },

  
  
    
  
});

const Fact = mongoose.model("Fact", factSchema);

export default Fact;
