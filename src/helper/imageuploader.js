import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

function imageUploader() {
  const imageStorage = multer.diskStorage({
    destination: `${process.env.S3_MOUNT_DIR}/images`,
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + file.originalname);
    },
  });
  const imageUpload = multer({
    storage: imageStorage,

    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg|jpeg|webp|svg|avif|mp4)$/)) {
        return cb(new Error("Please upload a Image in PNG, JPG, webp and jpeg format"));
      }
      cb(undefined, true);
    },
  });
  return imageUpload;
}

export default imageUploader;
