import multer from "multer";
import path from "path";

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "/uploads");
//   },
//   filename: function (req, file, callback) {
//     callback(
//       null,
//       file.fieldname +
//         "-" +
//         new Date().toISOString() +
//         "-" +
//         path.extname(file.originalname)
//     );
//   },
// });
// const upload = multer({ storage: storage });
// export default upload;

const imageStorage = multer.diskStorage({
  destination: "public/CSV",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: imageStorage,
});
export default upload;
