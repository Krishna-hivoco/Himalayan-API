import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    image: {
      type: String,
      require: true,
      trim: true,
    },
    message: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
