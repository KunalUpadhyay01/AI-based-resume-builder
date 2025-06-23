const express = require('express')
const router = express.Router();
const authController = require("../Controller/AuthController")

router.post("/register", authController.Register);
router.get("/login", authController.Login);


module.exports = router;