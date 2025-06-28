const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  title: String,
  marka: String,
  year: Number,
  km: String,
  color: String,
  price: String,
  plate: String,
  kasatipi: String,
  seatCount: String,
  vites: String,
  çekiş: String,
  chassisNumber: String,
  damageRecord: String,
  licenseRecord: String,
  description: String,
  city: String,
  district: String,
  neighborhood: String,
  phoneNumber: String,
  selectedImages: [String], 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);
