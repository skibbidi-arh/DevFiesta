const express = require("express")
const router = express.Router()
const JWTUtils = require("../utils/jwtUtils")

const ProjectController = require("../controllers/projectController")
const { validateProject, handleValidationErrors } = require("../middleware/validation")

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token missing or invalid" })
  }

  try {
    const token = authHeader.split(" ")[1]
    const user = JWTUtils.verifyToken(token)
    req.user = user // user = { username, email }
    next()
  } catch (err) {
    return res.status(401).json({ error: err.message || "Invalid token" })
  }
}

router.post(
  "/create",
  verifyToken,
  validateProject,
  handleValidationErrors,
  ProjectController.createProject
)

router.get("/my-projects", verifyToken, ProjectController.retrieveProjectsbyUsername)

module.exports = router
