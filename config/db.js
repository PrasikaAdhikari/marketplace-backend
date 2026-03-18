import mongoose from "mongoose";
const mongoConnection = async () => {
  const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/vendor";
  console.log(mongoUrl);
  await mongoose.connect(mongoUrl);
};

export default mongoConnection;
