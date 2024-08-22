import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongod = async () => {
  mongoose
    .connect(`${process.env.MONGOCONNECTIONSTRING}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

mongod();
