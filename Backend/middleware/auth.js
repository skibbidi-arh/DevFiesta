const JWTUtils = require("../utils/jwtUtils");
const User = require("../models/user")
const ResponseHandler = require("../utils/responseHandler")

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    const token = JWTUtils.extractTokenFromHeader(authHeader)

    const decoded = JWTUtils.verifyToken(token)

    // Verify user still exists
    const user = await User.findByUsername(decoded.username)
    if (!user) {
      return ResponseHandler.unauthorized(res, "User not found")
    }

    req.user = {
      username: user.username,
      email: user.email,
      full_name: user.full_name,
    }

    next()
  } catch (error) {
    if (error.message === "Authorization header missing") {
      return ResponseHandler.unauthorized(res, "Access token required")
    }
    return ResponseHandler.forbidden(res, error.message)
  }
}

module.exports = { authenticateToken }
