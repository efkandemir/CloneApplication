const express = require("express");
const { addVehicleController } = require("../controllers/vehicleController");
const requireSignIn = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add-vehicle", requireSignIn, addVehicleController);

module.exports = router;
