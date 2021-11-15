import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Hobby = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: false },
    indoors: { type: String, required: true },
    risk: { type: Number, required: true },
    featured: { type: Boolean, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("hobbies", Hobby);
