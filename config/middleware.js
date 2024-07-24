const jwt = require("jsonwebtoken");
const config = require("./config");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded;
    if (req.user && req.user.role === "admin") {
        next();
      } else {
        res.status(403).json({ error: "Access denied. Admins only." });
      }
  } catch (error) {
    console.log("ERROR : ", error);
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;
