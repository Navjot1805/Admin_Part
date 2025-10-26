import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

const checkPhones = async () => {
  const db = mongoose.connection.useDb("studentAcedmics");
  const collection = db.collection("studentdetails");

  try {
    // Correct syntax for projection in new driver
    const cursor = collection.find({}, { projection: { phone: 1 } });
    const phones = await cursor.toArray();
    console.log("All phone numbers:", phones);
  } catch (err) {
    console.error("❌ Error fetching phone numbers:", err);
  } finally {
    mongoose.connection.close();
  }
};

await connectDB();
await checkPhones();
