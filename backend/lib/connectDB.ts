import { connect } from "mongoose";

const connectToDatabase = async () => {
  let isConnected = false;
  if (isConnected) return;
  await connect(process.env.URI!);
  isConnected = true;
  console.log("============================");
  console.log("DB is connected Successfully");
  console.log("============================");
};

export default connectToDatabase;
