import mongoose from "mongoose";

const connectToDatabase = async () => {
  let isConnected = false;
  if (isConnected) return;

  await mongoose.connect(process.env.URI!);

  isConnected = true;
  console.log("============================");
  console.log("DB is connected successfully");
  console.log("============================");
};

export default connectToDatabase;
