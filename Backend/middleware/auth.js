const jwt = require("jsonwebtoken");

// Middleware function to verify user tokens
const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "my-secret-key");

    
    req.user = decoded;
    next(); 
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
