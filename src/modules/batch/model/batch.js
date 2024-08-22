import mongoose from "mongoose";

const { Schema } = mongoose;

const batchSchema = new Schema(
  {
    batch: {
      type: String,
      require: true,
      trim: true,
    }
  },
  { timestamps: true }
);



const batchModel = mongoose.model("Batch", batchSchema);

export { batchModel };
