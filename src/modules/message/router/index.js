import { Router } from "express";
import { httpHandler } from "../../../helper/response/errorUtil.js";
import massageService from "../services/index.js";
import imageUploader from "../../../helper/imageuploader.js";
// import imageUploader from "../../../helper/imageUploader.js";

const router = Router();
const imageUpload = imageUploader();

router.post(
  "/post-farmer-messages",
  httpHandler(async (req, res) => {
    const { data } = req.body;
    const result = await massageService.enterFarmerMessage(data);
    res.send(result);
  })
);
router.post(
  "/insert-farmer-messages",
  imageUpload.array("image"),
  httpHandler(async (req, res) => {
    const data = req.body;
    const image = req.files;
    // console.log("ima", image);
    const result = await massageService.insertSingleFarmerMessage(
      data,
      image[0]
    );
    res.send(result);
  })
);
router.get(
  "/fetch-random-message",
  httpHandler(async (req, res) => {
    const result = await massageService.randomMessage();
    res.send(result);
  })
);

export default router;
