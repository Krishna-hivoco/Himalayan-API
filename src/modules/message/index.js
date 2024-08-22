import { Router } from "express";
import messageRouter from "./router/index.js";
const router = Router();

router.use("/message", messageRouter);

const messageModule = {
  init: (app) => {
    app.use(router);
    console.log("Message module Loaded");
  },
};

export default messageModule;
