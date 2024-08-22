import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return res.status(400).send({ error: "Not authenticated." });
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

    req.user = users;
    next();
  } catch (err) {
    return err;
  }
};

const sellerAuth = (req, res, next) => {
  // Get the token from the cookies
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      return res.status(404).send({ error: "Not authenticated." });
    }
    const token = authHeader.split(" ")[1];

    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

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

    req.user = users;
    next();
  } catch (err) {
    return err;
  }
};

const authorization = {
  auth,
  sellerAuth,
};

export default authorization;
