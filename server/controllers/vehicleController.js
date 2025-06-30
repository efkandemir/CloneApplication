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
const getVehiclesController = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
      .populate('user', 'name email') 
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "İlanlar başarıyla getirildi",
      vehicles,
    });
  } catch (error) {
    console.error("Araç listeleme hatası:", error);
    return res.status(500).send({
      success: false,
      message: "Araçlar listelenirken bir hata oluştu",
      error,
    });
  }
};
const getVehicleByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await Vehicle.findById(id).populate('user', 'name email');

    if (!vehicle) {
      return res.status(404).send({
        success: false,
        message: "İlan bulunamadı",
      });
    }

    return res.status(200).send({
      success: true,
      message: "İlan başarıyla getirildi",
      vehicle,
    });
  } catch (error) {
    console.error("İlan getirme hatası:", error);
    return res.status(500).send({
      success: false,
      message: "İlan getirilirken bir hata oluştu",
      error,
    });
  }
};
const getVehiclesByBrandController = async (req, res) => {
  try {
    const { marka } = req.params;

    const vehicles = await Vehicle.find({ marka: { $regex: new RegExp(`^${marka}$`, "i") } })
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Markaya göre ilanlar başarıyla getirildi",
      vehicles,
    });
  } catch (error) {
    console.error("Markaya göre araç listeleme hatası:", error);
    return res.status(500).send({
      success: false,
      message: "Markaya göre araçlar listelenirken bir hata oluştu",
      error,
    });
  }
};





module.exports = { addVehicleController,getVehiclesController,getVehicleByIdController,getVehiclesByBrandController};
