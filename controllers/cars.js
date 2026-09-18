const Car = require('../models/Car');

const getAll = async (req, res) => {
  //#swagger.tags=['Cars']
  const cars = await Car.find();
  res.status(200).json(cars);
};

const getSingle = async (req, res) => {
  //#swagger.tags=['Cars']
  const car = await Car.findById(req.params.id);
  res.status(200).json(car);
};

const createCar = async (req, res) => {
  //#swagger.tags=['Cars']
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
  if (response) {
    res.status(201).json({ message: 'Car created successfully', data: response });
  } else {
    res.status(500).json('Some error occurred while creating the car.');
  }
};

const updateCar = async (req, res) => {
  //#swagger.tags=['Cars']
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
  if (response) {
    res.status(200).json({ message: 'Car updated successfully' });
  } else {
    res.status(500).json('Some error occurred while updating the car.');
  }
};

const deleteCar = async (req, res) => {
  //#swagger.tags=['Cars']
  const response = await Car.findByIdAndDelete(req.params.id);
  if (response) {
    res.status(200).json({ message: 'Car deleted successfully' });
  } else {
    res.status(500).json('Some error occurred while deleting the car.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createCar,
  updateCar,
  deleteCar
};
