import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/WorkSpot")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
export default mongoose;
