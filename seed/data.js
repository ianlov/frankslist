import db from "../db/connection.js";
import Hobby from "../models/hobby.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "ian",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "bianca",
    email: "b.anca@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "enzo",
    email: "n.zo@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "kumi",
    email: "kumi@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 11),
  });
  await user4.save();

  const hobbies = [
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
  ];

  await Hobby.insertMany(hobbies);
  console.log("Created users & hobbies!");

  db.close();
};

insertData();
