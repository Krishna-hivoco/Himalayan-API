import createError from "http-errors-lite";
import { StatusCodes } from "http-status-codes";
import assert from "assert";
import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import messageModel from "../model/index.js";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const enterFarmerMessage = async (data) => {
  const savePromises = data.map((obj) => {
    const newObject = new messageModel(obj);
    return newObject.save();
  });
  const savedObjects = await Promise.all(savePromises);

  return savedObjects;
};
const insertSingleFarmerMessage = async (data, file) => {
  console.log("file", file);
  const { secure_url } = await cloudinary.uploader.upload(file.path);

  const saveddata = await new messageModel({
    ...data,
    image: secure_url,
  }).save();
  // const savedObjects = await Promise.all(savePromises);

  return saveddata;
};
const randomMessage = async () => {
  const randomMessage = await Message.aggregate([{ $sample: { size: 1 } }]);
  assert(
    randomMessage.length > 0,
    createError(StatusCodes.NOT_FOUND, "No message found")
  );
  return randomMessage[0];
};

const massageService = {
  enterFarmerMessage,
  insertSingleFarmerMessage,
  randomMessage,
};

export default massageService;
