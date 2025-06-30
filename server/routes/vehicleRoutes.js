const express = require("express");
const {
  addVehicleController,
  getVehiclesController,
  getVehicleByIdController,
  getVehiclesByBrandController,
} = require("../controllers/vehicleController");
const requireSignIn = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add-vehicle", requireSignIn, addVehicleController);

router.get("/get-all", getVehiclesController);

router.get("/get/:id", getVehicleByIdController);

router.get("/get-by-brand/:marka", getVehiclesByBrandController);

module.exports = router;
