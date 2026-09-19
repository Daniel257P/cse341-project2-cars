const Car = require('../models/Car');

const getAll = async (req, res) => {
  //#swagger.tags=['Cars']
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while retrieving cars.', error: err.message });
  }
};

const getSingle = async (req, res) => {
  //#swagger.tags=['Cars']
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found.' });
    }
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while retrieving the car.', error: err.message });
  }
};

const createCar = async (req, res) => {
  //#swagger.tags=['Cars']
  try {
    const car = {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      year: req.body.year,
      engineType: req.body.engineType,
      transmission: req.body.transmission,
      color: req.body.color,
      price: req.body.price,
      mileage: req.body.mileage,
      fuelType: req.body.fuelType
    };
    const response = await Car.create(car);
    res.status(201).json({ message: 'Car created successfully', data: response });
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while creating the car.', error: err.message });
  }
};

const updateCar = async (req, res) => {
  //#swagger.tags=['Cars']
  try {
    const car = {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      year: req.body.year,
      engineType: req.body.engineType,
      transmission: req.body.transmission,
      color: req.body.color,
      price: req.body.price,
      mileage: req.body.mileage,
      fuelType: req.body.fuelType
    };
    const response = await Car.findByIdAndUpdate(req.params.id, car);
    if (!response) {
      return res.status(404).json({ message: 'Car not found.' });
    }
    res.status(200).json({ message: 'Car updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while updating the car.', error: err.message });
  }
};

const deleteCar = async (req, res) => {
  //#swagger.tags=['Cars']
  try {
    const response = await Car.findByIdAndDelete(req.params.id);
    if (!response) {
      return res.status(404).json({ message: 'Car not found.' });
    }
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while deleting the car.', error: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createCar,
  updateCar,
  deleteCar
};
