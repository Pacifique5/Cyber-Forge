const express = require("express");
const UserController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// All user routes require authentication
router.use(authMiddleware);

router.get("/profile", UserController.getProfile);
router.put("/profile", UserController.updateProfile);
router.put("/change-password", UserController.changePassword);
router.put("/update-email", UserController.updateEmail);
router.post("/upload-profile-image", UserController.uploadProfileImage);
router.get("/dashboard-stats", UserController.getDashboardStats);

module.exports = router;