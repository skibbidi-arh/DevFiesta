const express = require("express");
const router = express.Router();
const JWTUtils = require("../utils/jwtUtils");
const {authenticateToken,verifyToken}= require("../middleware/auth")

const AuthController = require("../controllers/authController");
const {
  validateRegistration,
  validateLogin,
  handleValidationErrors,
} = require("../middleware/validation");

router.post(
  "/register",
  validateRegistration,
  handleValidationErrors,
  AuthController.register
);

router.post(
  "/login",
  validateLogin,
  handleValidationErrors,
  AuthController.login
);

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const user = JWTUtils.verifyToken(token);
    req.user = user; // user = { username, email }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

router.get("/profile", verifyToken, AuthController.fetchProfile);
router.put("/profile", verifyToken, AuthController.update_profile);
module.exports = router;
