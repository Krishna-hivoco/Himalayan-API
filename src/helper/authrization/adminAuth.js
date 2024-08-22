import createError from "http-errors-lite";
import { StatusCodes } from "http-status-codes";
import { assert } from "joi";
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      return res.status(404).send({ error: "Not authenticated." });
    }
    const token = authHeader.split(" ")[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWTSECRET);
    } catch (err) {
      return res.status(403).send({ error: "Not authenticated." });
    }
    const users = {
      userId: decodedToken.user_id,
      role: decodedToken.role,
    };

    if (users.role!=="super admin") {
      return res.status(404).send({ error: "Only Super Admin can access it." });
    }
    
    req.user = users;
    next();
  } catch (err) {
    return err;
  }
};

const authorization = {
  adminAuth,
};

export default authorization;
