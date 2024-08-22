import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },

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
