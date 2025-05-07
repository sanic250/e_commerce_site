import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  console.log(`Authenticate middleware called for ${req.path}`);
  console.log(`req.path: ${req.path}`);
  console.log(`req.url: ${req.url}`);
  if (req.path === "/api/auth/signup" || req.path === "/api/auth/login") {
    console.log("Excluding authentication for signup/login");
    return next();
  }
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};

export default authenticate;
