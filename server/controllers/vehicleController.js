const Vehicle = require("../models/vehicleModel");

const addVehicleController = async (req, res) => {
  try {
    const vehicleData = req.body;

    // Kullanıcı JWT ile oturum açmış olmalı
    vehicleData.user = req.user._id;

    const vehicle = new Vehicle(vehicleData);
    await vehicle.save();

    return res.status(201).send({
      success: true,
      message: "İlan başarıyla eklendi",
      vehicle,
    });
  } catch (error) {
    console.error("Araç ekleme hatası:", error);
    return res.status(500).send({
      success: false,
      message: "Araç eklenirken bir hata oluştu",
      error,
    });
  }
};

module.exports = { addVehicleController };
