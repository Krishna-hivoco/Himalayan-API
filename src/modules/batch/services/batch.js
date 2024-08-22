import createError from "http-errors-lite";
import { StatusCodes } from "http-status-codes";
import assert from "assert";

import { config } from "dotenv";
import { batchModel } from "../model/index.js";

config();

const enterBatchCode = async (code) => {
  const savedData = await new batchModel({ batch: code }).save();
  assert(
    savedData,
    createError(StatusCodes.INTERNAL_SERVER_ERROR, "Something Went wrong")
  );
  return savedData;
};
const verifyBatchCode = async (code) => {
  const isp = await batchModel.findOne({batch:code})
  assert(
    isp,
    createError(StatusCodes.NOT_FOUND, "Invalid batch code")
  );
  return isp
};

const batchService = {
  enterBatchCode,
  verifyBatchCode,
};

export default batchService;
