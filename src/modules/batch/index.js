import { Router } from "express";
import batchRouter from "./router/batch.js";
const router = Router();

router.use("/batch", batchRouter);

const batchModule = {
  init: (app) => {
    app.use(router);
    console.log("Batch Code module Loaded 🔒👤");
  },
};

export default batchModule;
