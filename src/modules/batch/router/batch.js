import { Router } from "express";
import batchService from "../services/batch.js";

import { httpHandler } from "../../../helper/response/errorUtil.js";

const router = Router();

router.post(
  "/post-batch-code",
  httpHandler(async (req, res) => {
    const { code } = req.body;
    const result = await batchService.enterBatchCode(code);
    res.send(result);
  })
);
router.post(
  "/verify-batch-code",
  httpHandler(async (req, res) => {
    const { code } = req.body;
    const result = await batchService.verifyBatchCode(code);
    res.send(result);
  })
);

export default router;
