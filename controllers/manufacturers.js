const Manufacturer = require('../models/Manufacturer');

const getAll = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  const manufacturers = await Manufacturer.find();
  res.status(200).json(manufacturers);
};

const getSingle = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  const manufacturer = await Manufacturer.findById(req.params.id);
  res.status(200).json(manufacturer);
};

const createManufacturer = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  const manufacturer = {
    name: req.body.name,
    country: req.body.country,
    foundedYear: req.body.foundedYear,
    website: req.body.website
  };
  const response = await Manufacturer.create(manufacturer);
  if (response) {
    res.status(201).json({ message: 'Manufacturer created successfully', data: response });
  } else {
    res.status(500).json('Some error occurred while creating the manufacturer.');
  }
};

const updateManufacturer = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  const manufacturer = {
    name: req.body.name,
    country: req.body.country,
    foundedYear: req.body.foundedYear,
    website: req.body.website
  };
  const response = await Manufacturer.findByIdAndUpdate(req.params.id, manufacturer);
  if (response) {
    res.status(200).json({ message: 'Manufacturer updated successfully' });
  } else {
    res.status(500).json('Some error occurred while updating the manufacturer.');
  }
};

const deleteManufacturer = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  const response = await Manufacturer.findByIdAndDelete(req.params.id);
  if (response) {
    res.status(200).json({ message: 'Manufacturer deleted successfully' });
  } else {
    res.status(500).json('Some error occurred while deleting the manufacturer.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createManufacturer,
  updateManufacturer,
  deleteManufacturer
};
