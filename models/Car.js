const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    manufacturer: { type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer', required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    engineType: { type: String, required: true },
    transmission: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    mileage: { type: Number, required: true },
    fuelType: { type: String, required: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Car', carSchema);
