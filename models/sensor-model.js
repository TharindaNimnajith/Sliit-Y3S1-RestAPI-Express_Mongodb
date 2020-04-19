const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sensorSchema = new Schema({
  id: { type: String, required: true, unique: true },
  floorNo: { type: String, required: true },
  roomNo: { type: String, required: true },
  active: { type: Boolean, required: false },
  smokeLevel: { type: Number, required: true, default: 0 },
  co2Level: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Sensors", sensorSchema);
