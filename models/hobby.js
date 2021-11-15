import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Hobby = new Schema(
  {
    name: { type: String, required: true },
    img_url: { type: String, required: true },
    description: { type: String, required: true },
    price: { low: Number, high: Number, required: true },
    rating: { type: Number, required: false },
    indoors: { type: String, required: true },
    risk: { type: Number, required: true },
    featured: { type: Boolean, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("hobbies", Hobby);
