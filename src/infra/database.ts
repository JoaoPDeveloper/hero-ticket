import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://joaopdeveloper:Mouse%4088456715@cluster0.9ts82gg.mongodb.net/hero-tickets"
    );
    console.log('Connect database Success')
  } catch (error) {
    console.log("~ file: database.ts:5 ~ connect ~ error:", error);
  }
}

// get link url
