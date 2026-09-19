const Manufacturer = require('../models/Manufacturer');

const getAll = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  try {
    const manufacturers = await Manufacturer.find();
    res.status(200).json(manufacturers);
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while retrieving manufacturers.', error: err.message });
  }
};

const getSingle = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found.' });
    }
    res.status(200).json(manufacturer);
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while retrieving the manufacturer.', error: err.message });
  }
};

const createManufacturer = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  try {
    const manufacturer = {
      name: req.body.name,
      country: req.body.country,
      foundedYear: req.body.foundedYear,
      website: req.body.website
    };
    const response = await Manufacturer.create(manufacturer);
    res.status(201).json({ message: 'Manufacturer created successfully', data: response });
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while creating the manufacturer.', error: err.message });
  }
};

const updateManufacturer = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  try {
    const manufacturer = {
      name: req.body.name,
      country: req.body.country,
      foundedYear: req.body.foundedYear,
      website: req.body.website
    };
    const response = await Manufacturer.findByIdAndUpdate(req.params.id, manufacturer);
    if (!response) {
      return res.status(404).json({ message: 'Manufacturer not found.' });
    }
    res.status(200).json({ message: 'Manufacturer updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while updating the manufacturer.', error: err.message });
  }
};

const deleteManufacturer = async (req, res) => {
  //#swagger.tags=['Manufacturers']
  try {
    const response = await Manufacturer.findByIdAndDelete(req.params.id);
    if (!response) {
      return res.status(404).json({ message: 'Manufacturer not found.' });
    }
    res.status(200).json({ message: 'Manufacturer deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Some error occurred while deleting the manufacturer.', error: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createManufacturer,
  updateManufacturer,
  deleteManufacturer
};
