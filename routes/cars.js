const express = require('express');
const router = express.Router();

const carController = require('../controllers/cars');
const validation = require('../middleware/validateCar');
const validateId = require('../middleware/validateId');

router.get('/', carController.getAll);
router.get('/:id', validateId, carController.getSingle);
router.post('/', validation.saveCar, carController.createCar);
router.put('/:id', validateId, validation.saveCar, carController.updateCar);
router.delete('/:id', validateId, carController.deleteCar);

module.exports = router;
